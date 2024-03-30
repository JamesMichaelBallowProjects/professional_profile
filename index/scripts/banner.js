const bannerHolders = document.querySelectorAll('.banner-holder')

function addAnimation() {
    bannerHolders.forEach(bannerHolder =>
        bannerHolder.setAttribute('animated', true)
    )
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}