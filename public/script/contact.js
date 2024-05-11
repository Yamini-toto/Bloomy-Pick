
//added... toggled and added classes on arrow image.
const image = document.querySelector(".con-help .dropdown img");
const downList = document.querySelector("#div-p");
const downline = document.querySelector(".con-help");

image.addEventListener("click",function(e){
  if(e.target == "img.img-hidden.img-visible"){
    image.classList.toggle("img-hidden");
    image.classList.add("img-visible");
    downList.classList.add("visible-div");
  
  }else{
    image.classList.toggle("img-visible");
    downList.classList.toggle("visible-div");
  }
});
//----------------------------------------------------
//changed the color of input and textarea (borders and label) on focus and blur
const input = document.querySelectorAll("input, textarea");

function onnFocus(e){
  document.getElementsByClassName(e.target.id)[0].style.color = "rgb(17, 145, 153)";
  document.getElementById(e.target.parentNode.parentNode.id).style.borderColor = "rgb(17, 145, 153)";
}

function onnBlur(e){
  document.getElementsByClassName(e.target.id)[0].style.color = "rgb(156, 156, 156)";
  document.getElementById(e.target.parentNode.parentNode.id).style.borderColor = "rgb(156, 156, 156)";
}

input.forEach((i)=>{
  i.addEventListener("focus", onnFocus);
  i.addEventListener("blur", onnBlur);
});
//---------------------------------------------------
//removed the content after pseudo class while selecting from the dropdown list and change the paragraph tags style and change the innertext of id HELP..

const para = document.querySelectorAll("#div-p p")
const changePara = document.querySelector("#HELP")
  para.forEach((p)=>{
    p.addEventListener("click", function(e){
const paraText = e.target.textContent;
changePara.innerHTML= paraText;
changePara.style.color = "black";
changePara.classList.remove("Pseudo");
image.classList.toggle("img-visible");
downList.classList.toggle("visible-div");
});
p.addEventListener("mouseover", function(e){
  const paraText = e.target.textContent;
  changePara.innerHTML= paraText;
  document.getElementById("reason").value = paraText;
});
  });
