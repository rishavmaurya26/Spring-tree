
var fname=/^[A-Z][a-z]{2,10}/s
var lname=/^[A-Z][a-z]{2,10}/s
var password=/^[a-zA-z0-9\.$%@]{8,20}/s
var phone=/^[6-9]\d{9}$/s
var email=/^([a-zA-z0-9\.-]+)@([a-zA-z0-9-]+)(\.)[a-z]{2,20}/s
function isvalid(frmname) {

    if (!fname.test(document.forms[frmname]["fname"].value)) {
        alert("Name must contain only letters and first letter must be apital.")
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
