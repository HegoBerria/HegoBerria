window.addEventListener('resize', resetSlider);

function changeSliderDisplay() {
    slider = document.getElementById("background-slider");
    if (window.matchMedia("(orientation: portrait)").matches) {

        if (slider.style.top == "0px") {
            slider.style = " background-color: rgba(0, 0, 0, 0.8) ";
            slider.style.top = "-80%";
            
        } else {
            slider.style = " background-color: rgba(0, 0, 0, 0) ";
            slider.style.top = "0px";
            
        }
    } else {
        slider.style.top = "0px";
    }
}

function resetSlider() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        slider.style.top = "0px";
    }
}