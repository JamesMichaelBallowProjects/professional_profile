function isMobileDevice() {
	return window
		.matchMedia("only screen and (max-width: 760px)").matches;
}
let isMobile = isMobileDevice()

// rgb to grayscale bounce
setInterval(function() {
  let rgbImgs = document.getElementsByClassName("rgb-cluster")
  for (let index = 0; index < rgbImgs.length; index++) {
    rgbImgs[index].classList.toggle('gray-scale');
  }

}, 1000);

if (isMobile) {
  if (!window.location.href.includes("mobile") ) {
    window.location.replace("./mobile/index.html");
  }
}