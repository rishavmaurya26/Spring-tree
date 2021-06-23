var star_parent=document.getElementsByClassName("star_rating")
var star_hover=document.querySelector(".fas:hover")

    // console.log(star[i])
    
for(let i=0;i<star_parent.length;i++)  {  
    var star=star_parent[i].children
    for(let j=0;j<star.length;j++){
        if(j<4)
            {
                star[j].style.color="burlywood";
            }
        else{
                star[j].style.color="white"
            }
        }
}
var bar=document.getElementById("bar").children
console.log(bar)
var hotels=document.querySelector(".htl_column")
var places=document.querySelector(".places_column")
var taj=document.getElementById("welcome")
bar[0].addEventListener("click",()=>{
    console.log(bar[0])
    hotels.style.display="flex"
    places.style.display="none"
    taj.style.display="none"
})
bar[1].addEventListener("click",()=>{
    hotels.style.display="none"
   places.style.display="flex"
   taj.style.display="none"
})



