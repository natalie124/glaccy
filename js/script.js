var link = document.querySelector(".contacts-btn");
  
var popup = document.querySelector(".modal");

var close = popup.querySelector(".modal-close");

var closeOverlay = popup.querySelector(".shadow");

var login = popup.querySelector("[name=name]");
 
  
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

closeOverlay.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
	  }
	}
});

