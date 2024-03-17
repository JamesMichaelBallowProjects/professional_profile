// popover for "about me"
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el))

// education and publications
// -- confetti.js contains logic to add confetti animations to logos

// skills
// -- network.js contains logic to generate highcharts blue/green/red/yellow networks
// -- skill.js contains logic to generate skills accordion

// personal projects
// -- no js, all css

// certifications
// -- no js, all css

// hobbies
// -- hobbies.js contains logic to generate hobbies carousel