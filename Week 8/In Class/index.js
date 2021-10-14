// console.log(Math.floor(Math.random()*10)); Generates Random number between 1-10

// console.log(document.getElementsByClassName("options"));
// console.log(document.getElementsByClassName("options")[0].innerHTML);

const images = ["hawaii.jpg", "japan.jpg", "paris.jpg"];
const title = ["Hawaii", "Japan", "Paris"];



for(i=0;i<document.getElementsByClassName("options").length;i++){
  document.getElementsByClassName("label")[i].innerHTML = title[i];
  console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';
//document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/hawaii.jpg">';

  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}
function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
