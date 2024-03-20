function isMobileDevice() {
	return window
		.matchMedia("only screen and (max-width: 760px)").matches;
}
console.log(isMobileDevice())
let isMobile = isMobileDevice()
// THIS IS HOW TO FIX FOR iPHONE
// https://phppot.com/javascript/detect-mobile-device-javascript/


// popover for "about me"
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el))

// education and publications
// -- confetti.js contains logic to add confetti animations to logos

// skills
// -- network.js contains logic to generate highcharts blue/green/red/yellow networks
// ---- fix network layout if on mobile device
let networkContainers = document.getElementsByClassName('network-container')
console.log(networkContainers)
if (isMobile) {
  console.log("Detected as Mobile Device")
    for (let i = 0; i < networkContainers.length; i++) {
      networkContainers[i].classList.add('col-12')
      console.log(networkContainers[i].classList)
    }

} else {
  console.log("Detected as PC Device")
  networkContainers.forEach(nc => {
    nc.classList.add('col-sm-12', 'col-lg-6', 'col-xxl-3', 'g-2')
  });
}

//col col-sm-12 col-lg-6 col-xxl-3 g-2

// -- skill.js contains logic to generate skills accordion

// personal projects
// -- no js, all css

// certifications
// -- no js, all css

// hobbies
// -- hobbies.js contains logic to generate hobbies carousel