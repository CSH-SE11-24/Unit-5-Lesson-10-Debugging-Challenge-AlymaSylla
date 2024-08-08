console.log("challenge1.js running");

let button = document.querySelector(".clickButton");
console.log(button);

let image =  document.getElementById("invisible");
console.log(image);

button.addEventListener("click", function(event){
  console.log("image button clicked");
  image.src = "debuggin.gif"
})
