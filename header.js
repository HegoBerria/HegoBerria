function changeSliderDisplay() {
    slider = document.getElementById("background-slider");
    if (slider.style.top == "0px") {
        slider.style.top = "calc(-100% + 50px)";
    } else {
        slider.style.top = "0px";
    }
}