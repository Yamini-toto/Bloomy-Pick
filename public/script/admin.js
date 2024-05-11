const ImgClick= document.querySelector("#add-user");
const DropList = document.querySelector(".displayNone");

ImgClick.addEventListener("click", ()=>{
if(DropList.classList.contains("displayNone")){
    DropList.classList.add("admin-dropdown");
    DropList.classList.toggle("displayNone");
}else{
  DropList.classList.toggle("admin-dropdown");
  DropList.classList.add("displayNone");
}
});

const adminDropdownItems = document.querySelectorAll(".admin-ul li")
adminDropdownItems.forEach((item)=>{
item.addEventListener("click", ()=>{
DropList.classList.remove("admin-dropdown");
DropList.classList.add("displayNone")
});
});

// js for feedback



