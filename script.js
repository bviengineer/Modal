var modal = document.getElementById("simpleModal"); //gets modal div
var modalBtn = document.getElementById("modalBtn"); //gets click here button
var closeBtn = document.getElementById("closeBtn"); //gets the X which is wrapped in a span tag

modalBtn.addEventListener("click", openModal);

function openModal(){
    modal.style.display = "block";
}