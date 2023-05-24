const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer .";
    }, 0);
    setTimeout(() => {
        text.textContent = "Photographer .";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Video Editor .";
    }, 8000);


}
textLoad();
setInterval(textLoad, 12000);