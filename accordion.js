window.onscroll = function() {headerfix()};

const header = document.getElementById("header");
console.log(header);
const sticky = header.offsetTop;

function headerfix() {
    if(window.pageXOffset >= sticky){
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}