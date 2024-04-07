// global counters for id nomenclature
var accordionItemCounter = {
  "skills-accordion-1": 0,
  "skills-accordion-2": 0,
};

// toggle skills displays
function toggle_skills_display(){
  document.getElementById("simplified-skillset").classList.toggle("hide-content");
  document.getElementById("accordion-skillset").classList.toggle("hide-content");
}

// simplified display
function generate_badge(id_to_put_card, card_title, rating_number) {
  var newBadge = `
    <h2 class="badge custom-badge rounded-pill position-relative">
      ${card_title}
      <span class="badge custom-badge custom-badge-rating">
        ${rating_number}⭐
      </span>
    </h2>
  `;
  document.querySelector(`#${id_to_put_card}`).innerHTML += newBadge;
}

function populate_skills_badges(element_id, skill_comments) {

  skill_comments.forEach((r) => {
    generate_badge(
      element_id,
      r['title'],
      r['rating_number']
    )
  });
}

// card that is inserted into accordion
function generate_card(id_to_put_card, card_title, card_rating, card_body) {
  var newCard = `
      <div class="col col-sm-6 g-4">
        <div class="card text-bg-light border-dark flex-fill" style="width: auto;">
          <div class="card-header"><strong>${card_title}</strong></div>
          <div class="card-body ">
            <h5 class="card-title">
            </h5>
            <p class="card-text skill-card">
              ${card_body}</p>
              <small class="text-muted" style="font-size: x-small">Experience: ${card_rating}</small>
          </div>
        </div>
      </div>
    `;
  document.querySelector(`#${id_to_put_card}`).innerHTML += newCard;
}

// main accordion build function
function populate_skills_accordion(element_id, skill_name, skill_comments) {
  // update list counter
  accordionItemCounter[element_id] += 1;

  // grab value inside of input form
  var newRecord = `
      <div class="accordion-item">
        <h2 class="accordion-header" id="#${element_id}-header-${accordionItemCounter[element_id]}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${element_id}-item-${accordionItemCounter[element_id]}"
                aria-expanded="false" aria-controls="${element_id}-item-${accordionItemCounter[element_id]}">
                <div class="container-fluid" style="justify-content: flex-start;">
                    <div class="row">
                        <div class="col col-12">${skill_name}</div>
                    </div>
                </div>
            </button>
        </h2>
        <div id="${element_id}-item-${accordionItemCounter[element_id]}" class="accordion-collapse collapse"
            aria-labelledby="${element_id}-header-${accordionItemCounter[element_id]}" data-bs-parent="#${element_id}">
            <div class="accordion-body">
              <div class="row" id="${element_id}-itemBody-${accordionItemCounter[element_id]}">
                <!-- Cards to Explain Skill Loaded at Page Load -->
              </div>
            </div>
        </div>
      </div>
    `;

  // add accordion item to skills accodion
  document.querySelector(`#${element_id}`).innerHTML += newRecord;

  // add card to accorion item
  skill_comments.forEach((r) => {
    generate_card(
      `${element_id}-itemBody-${accordionItemCounter[element_id]}`,
      r["title"],
      r["rating"],
      r["body"]
    );
  });
}


// --------------------------------------
// generate skills accordion
fetch('./index/data/skills.json')
  .then(res => res.json()) 
  .then(data => {
    data["skills"].forEach(r => {
      populate_skills_accordion(
        r['table'],
        r['name'],
        r['description']
      )

      populate_skills_badges(
        "simplified-skillset",
        r['description']
      )

    });
  })
  .catch(error => {
    console.error('Error:', error);
  });