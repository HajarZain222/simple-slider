var i = 1;
function changeImgSrc() {
    console.log("I-->", i);
    document.getElementById("myImg").src = "images/" + i + ".jpg";
    i++;
    if (i > 8) {
        i = 1;
    }
}

function displayPrevImg() {
    i--;
    console.log("I-->", i);
    if (i < 1) {
        i = 8;
    }
    document.getElementById("myImg").src = "images/" + i + ".jpg";
}

function startSLider() {
    sliderInterval = window.setInterval(changeImgSrc, 1000);
}

function pauseInterval() {
    clearInterval(sliderInterval);
}

function nextImage() {
    changeImgSrc();
}

function prevImage() {
    displayPrevImg();
}

