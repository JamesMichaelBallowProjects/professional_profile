import confetti from 'https://cdn.skypack.dev/canvas-confetti';

// define confetti shapes used for logos
var shapePool = {
    "space": [
        "🌎", "🌌", "🌚", "🌞", "🌟"
    ],
    "clarkson-university": [
        "🟡", "🟢"
    ],
    "florida-state-university": [
        "🟡", "🔴"
    ],
    "nnptu": [
        "☢", "⚪", "🔴", "🔵"
    ]
}

// main confetti function
function makeConfetti(
    selectedShapes = shapePool['space']
){
    // initialize
    var shapeScalar = 2;
    var confettiShapes = [];

    // obtain confetti shapes
    for (const shape of selectedShapes) {
        confettiShapes.push(
            confetti.shapeFromText({ text: shape, shapeScalar})
        )
    }

    // generate confetti across top of page
    var driftFlag = 1
    var driftScalar = 0.5
    for (let index = 0; index < 5; index++) {
        confetti(
            {
                shapes: confettiShapes,
                scalar: shapeScalar,
                particleCount : 150,
                flat: false, // tilt and wobble off?
                origin: {
                    x: (0 + index)/5,
                    y: -0.2
                },
                angle: 270,
                spread: 360,
                startVelocity: 45,
                gravity: 1,
                drift: driftScalar*driftFlag,
                ticks: 250

            }
        );
        if (driftFlag == 1) {
            driftFlag = -1
        } else {
            driftFlag = 1
        }
    }

}

// place confetti animation on logo buttons
document.getElementById("clarkson-emblem").addEventListener("click", () => makeConfetti(shapePool['clarkson-university']))
document.getElementById("florida-state-emblem").addEventListener("click", () => makeConfetti(shapePool['florida-state-university']))
document.getElementById("nnptu-emblem").addEventListener("click", () => makeConfetti(shapePool['nnptu']))