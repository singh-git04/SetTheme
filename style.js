// sets theme if dark turns light or light turns dark; 
function settheme(){
if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("dark");
    document.body.classList.remove("light");
}else{
      document.body.classList.add("light"); 
  document.body.classList.remove("dark"); 
}
}

// changes theme on click; 
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
  if(document.body.classList.contains("dark")){
    document.body.classList.remove("dark");
    document.body.classList.add("light");

    localStorage.setItem("theme","light");
  } 
  else{
    document.body.classList.remove("light");
    document.body.classList.add("dark");

    localStorage.setItem("theme","dark");
  }

})

// add event according to os; 
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){
  settheme();
});
// set theme on reload; 
settheme();