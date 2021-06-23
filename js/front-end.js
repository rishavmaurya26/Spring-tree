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

var number = /^[6-9]\d{9}/s
var fname = /^[A-Z][a-z]{2,10}/s
var lname = /^[A-Z][a-z]{2,10}/s
var password = /^[a-zA-z0-9\.$%@]{8,20}/s
var phone = /^[6-9]\d{9}/s
var email = /^([a-zA-z0-9\.-]+)@([a-zA-z0-9-]+)(\.)[a-z]{2,20}/s
console.log(document.forms[frmname]["fname"].value)
function isvalid(frmname) {

    if (!fname.test(document.forms[frmname]["fname"].value)) {
        
        alert("Name must contain only letters and first letter must be capital.")
        return false
    }
    if (!lname.test(document.forms[frmname]["lname"].value)) {
        alert("Name must contain only letters and first letter must be capital.")
        return false
    }
    if (!email.test(document.forms[frmname]["email"].value)) {
        alert("invalid mail")
        return false
    }

    if (!phone.test(document.forms[frmname]["contact"].value)) {
        alert("No. must have 10 digits only")
        return false
    }

    if (!password.test(document.forms[frmname]["password"].value)) {
        alert("password must contain atleast 8 characters.")
        return false
    }
}


function goto() {
    var city = document.querySelector("#browse>section>input").value.toLowerCase()
    console.log(city)
    var search = document.querySelector("#browse>section>a")
    search.href = "/" + city
}

