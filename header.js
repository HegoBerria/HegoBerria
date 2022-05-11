window.addEventListener('resize', resetSlider);

function changeSliderDisplay() {
    slider = document.getElementById("background-slider");
    if (window.matchMedia("(max-width: 600px)").matches) {

        if (slider.style.top == "0px") {
            slider.style.top = "calc(-100% + 60px)";
        } else {
            slider.style.top = "0px";
        }
    } else {
        slider.style.top = "0px";
    }
}

function resetSlider() {
    if (window.matchMedia("(min-width: 600px)").matches) {
        slider.style.top = "0px";
    }
}