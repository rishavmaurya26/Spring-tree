const slide = document.querySelector(".cont1 .imgslide>div")
const prev = document.getElementById("prevbtn")
const next = document.getElementById("nextbtn")
var img = document.querySelectorAll(".imgslide img")
var imgdiv = document.querySelector(".imgslide>div")
var imglen = img[0].clientWidth
var num = img.length
let i = 0
var slider = setInterval(slde, 2000);
function slde() {
    slide.style.transition = "transform 0.3s linear"
    i++;
    if (i == 4) {
        i = 0
    }
    slide.style.transform = "translate(" + (-(imglen + 8) * i) + "px)";
}

const test = document.querySelector(".Testimonials>div")
const nextarw = document.getElementById("nxtarw")
const prevarw = document.getElementById("prevarw")
const len = (test.clientWidth / 3)
console.log(len)
let j = 0
prevarw.addEventListener("click", () => {
    test.style.transition = "transform 0.3s linear"
    j--;
    if (j === -1) {
        j = 2
    }
    console.log(len)
    test.style.transform = "translate(" + (-len * j) + "px)";
}
)
nextarw.addEventListener("click", () => {
    test.style.transition = "transform 0.3s linear"
    j++;
    if (j === 3) {
        j = 0
    }
    // console.log(j)
    test.style.transform = "translate(" + (-len * j) + "px)";
}
)

function goto() {
    var city = document.querySelector("#browse>section>input").value.toLowerCase()
    console.log(city)
    var search = document.querySelector("#browse>section>a")
    search.href = "/" + city
}

