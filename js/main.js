
function callFunction() {
    console.log("Hello World");
}

const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

function openMenu() {
    mobileMenu.style.display = "flex";
    body.style.overflowY = "hidden";
}

function closeMenu() {
    mobileMenu.style.display = "none";
    body.style.overflowY = "auto";
}

// Get the modal
var modal = document.getElementById("artModal");

var img = document.getElementById("art0Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art1Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art2Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art3Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art4Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art5Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art6Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art7Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art8Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art9Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art10Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art11Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art12Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}

var img = document.getElementById("art13Img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style.overflowY = "hidden";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.style.overflowY = "scroll";
}