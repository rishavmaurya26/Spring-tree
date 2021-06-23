
// var days=["Mon","Tue","Wed","Thru","Fri","Sat","Sun"]

// var str1=""
// function add_days(value){
//     str1=str1+"<div>"+value+"</div>"
// }
// days.forEach(add_days)
// console.log(str1)
// var day=document.getElementById("days")
// day.innerHTML=str1
// var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
// var mon=document.querySelector("#months>h3");
// var next=document.querySelector("#months>.fa-chevron-right")
// var prev=document.querySelector("#months>.fa-chevron-left")
// var dates=document.getElementById("dates")
// var yr=document.querySelector("#year>h3");
// var next_year=document.querySelector("#year>.fa-chevron-right")
// var prev_year=document.querySelector("#year>.fa-chevron-left")
// var month=0
// const d= new Date()
// var month=d.getMonth()
// var year=d.getFullYear()
// function set_date(){
//     var j=1
//     var str=""
//     d.setFullYear(year,month,j)
//     month=d.getMonth()
//     year=d.getFullYear()
//     for(i=0;i<42;i++)
//     {    
//         d.setFullYear(year,month,j)
//         var day1=d.getDay()
//         let date=d.getDate()
//         mon.innerHTML=months[month]
//         yr.innerHTML=year
//         if(i>=day1){
//         str=str+"<div>"+date+"</div>";
//         j++;
//         }
//         else{
//             str=str+"<div>"+"</div>"
//         }
//         dates.innerHTML=str
//     }
    
// }
// set_date();
// next.addEventListener("click",()=>{
//     month++;
//     set_date()
// })
// prev.addEventListener("click",()=>{
//     month--;
//     set_date()
// })

// next_year.addEventListener("click",()=>{
//     year++
//     set_date()
//     yr.innerHTML=year
// })
// prev_year.addEventListener("click",()=>{
//     year--
//     set_date()
// })

// var book_date=document.querySelectorAll("#dates>div")
// var cin=document.querySelector(".check_in input")
// var cout=document.querySelector(".check_out input")
// for(dts of book_date){
//     var dr="/"+(month+1)+"/"+year
//     dts.addEventListener("click",()=>{
//         if(cin.name==="false")
//         {
//             cin.value=dr
//             cin.name="true"
//             console.log(dr)
//         }
//         if(cout.name==="false")
//         {
//             cout.value=dr
//             cout.name="true"
//         }
//     })
// }

// function set(ele){
//     ele.name="false"
// }
    var nme=document.getElementById("name")
    var age=document.getElementById('age')
    var id=document.getElementById("id")
    var name_valid=/^[A-Z]([a-z]+) [A-Z]([a-z]+)/s
    var id_valid=/^[0-9]{12}$/s
function is_valid(){
    if(!name_valid.test(nme.value))
    {alert("invalid nme")
    return false 
    }
    if(age.value>=18){
        if(!id_valid.test(id.value)){
            alert("invalid adhaar num")
            return false
        } 
    }
    add_member()
    return false
}
function add_member(){
    var person=document.createElement("h3")
    var str=document.getElementById("name").value +" "+document.getElementById("age").value
    var gen=document.getElementsByName("gender")
    for(let i=0;i<gen.length;i++)
    {
        if(gen[i].checked==true)
        {
        gen[i].checked=false
        str=str+" "+gen[i].value
        console.log(str)
    }
    }
    if(document.getElementById("name").value!="" && document.getElementById("age").value!="")
    {
        person.innerHTML=str
        document.getElementById("mem_details").appendChild(person)
    }
    document.getElementById("name").value=""
    document.getElementById("age").value=""
    document.getElementById("id").value=""
}
var room_price=document.getElementsByClassName("price")
var num_room=document.querySelectorAll("#room_type input")
var pay=document.getElementById("proceed_pay")
pay.addEventListener("click",()=>{
    totalcost()
})
function totalcost(){
    var ttl_cost=0
    for(let i=0;i<room_price.length;i++)
    {
        ttl_cost=ttl_cost+ parseInt(room_price[i].innerHTML)*num_room[i].value
    }
    document.querySelector("#pricing>span>b").innerHTML=ttl_cost
}
