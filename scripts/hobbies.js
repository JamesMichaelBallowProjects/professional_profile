// image block functions
function return_image_block(image) {
  return `
    <img src="${image["image_path"]}" class="center-items hobby-image" alt="">
  `
}

// video block functions
function videoEnded(vid) {
  vid.load();
}

function return_video_block(video) {
  return `
      <video class="hobby-video hobby-video" poster="${video["thumbnail_path"]}" onended="videoEnded(this)" controls>
        <source src="${video["video_path"]}" type="video/mp4">
      </video>
  `
}

// generation of carousel INDICATOR
function generate_carousel_indicator(count) {
  var indicator = "";
  for (let index = 0; index < count; index++) {
    if (index == 0) {
      indicator =
        indicator +
        `
            <button type="button" data-bs-target="#hobbies" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide ${index}"></button>
          `;
    } else {
      indicator =
        indicator +
        `
            <button type="button" data-bs-target="#hobbies" data-bs-slide-to="${index}" aria-label="Slide ${index}"></button>
          `;
    }
  }

  document.querySelector("#carousel-inidicator-block").innerHTML += indicator;
}

// generation of carousel SLIDE
function generate_hobby(
  active,
  hobby_title,
  hobby_image,
  hobby_video,
  hobby_quote,
  hobby_quote_author
) {

  // content
  let content = ""

  // make hobby image if image
  if (hobby_image !== null) {
    content = return_image_block(hobby_image);
  }

  // make hobby video if video
  if (hobby_video !== null) {
    content = return_video_block(hobby_video);
  }

  // new hobby carousel item
  var newHobby = `
    <div class="carousel-item container-fluid ${active} " data-bs-interval="10000">
        <div class="card text-bg-light border-dark flex-fill" style="width: auto;">
            <!-- body -->
            <div class="card-body">
                <!-- title -->
                <h5 class="card-title hobby-title-text">
                    ${hobby_title}
                </h5>
                <!-- content -->
                <div class="container-fluid">
                    <!-- image or video -->
                    <div class="row center-items">
                    ${content}
                    </div>
                    <!-- quotation -->
                    <div class="row">
                        <div class="g-4">
                            <figure>
                                <blockquote class="blockquote" style="min-height: 60px;">
                                    <p>${hobby_quote}</p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    <em>${hobby_quote_author}</em>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   `;

  document.querySelector("#carousel-items-block").innerHTML += newHobby;
}



// --------------------------------------
// generate hobbies accordion
fetch("./data/hobbies.json")
  .then((res) => res.json())
  .then((data) => {
    generate_carousel_indicator(data["hobbies"].length);

    // add hobby by hobby into carousel
    data["hobbies"].forEach((r) => {
      generate_hobby(
        r["active"],
        r["title"],
        r["image"],
        r["video"],
        r["quote"]["quote"],
        r["quote"]["author"]
      );
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });