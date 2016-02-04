var link = document.querySelector(".find-hotel");
var popup = document.querySelector(".modal-content");
var arrival = document.querySelector("#arrival-date");
var form = popup.querySelector("form");
var grownup = popup.querySelector("#grown-up");
var children = popup.querySelector("#children");
var grownupDecr = popup.querySelector(".grown-up-decrease");
var grownupIncr = popup.querySelector(".grown-up-increase");
var childrenDecr = popup.querySelector(".children-decrease");
var childrenIncr = popup.querySelector(".children-increase");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
  if (popup.classList.contains("modal-content-show")) {
    link.innerHTML = "закрыть поиск";
    if (popup.classList.contains("modal-error")) {
       popup.classList.remove("modal-error");
    }
  }
  else {
    link.innerHTML = "поиск гостиницы в Седоне";
  }
  arrival.focus();
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      link.innerHTML = "поиск гостиницы в Седоне";
    }
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (grownup.value < 1) {
     grownup.value = 1;
     grownup.focus();
     if (popup.classList.contains("modal-error")) {
       popup.classList.remove("modal-error");
     }
    else {
      popup.classList.add("modal-error");
    }
  } else if (children.value < 0) {
            children.value = 0;
            children.focus();
            if (popup.classList.contains("modal-error")) {
               popup.classList.remove("modal-error");
            }
            else {
               popup.classList.add("modal-error");
            }
         } else {
           popup.classList.remove("modal-content-show");
           popup.classList.remove("modal-error");
           link.innerHTML = "поиск гостиницы в Седоне";
           }
});

grownupIncr.addEventListener("click", function(event) {
  event.preventDefault();
  grownup.value++;
});

childrenIncr.addEventListener("click", function(event) {
  event.preventDefault();
  children.value++;
});

grownupDecr.addEventListener("click", function(event) {
  event.preventDefault();
  grownup.value--;
  if (grownup.value < 1) {
     grownup.value = 1;
     if (popup.classList.contains("modal-error")) {
       popup.classList.remove("modal-error");
     }
    else {
      popup.classList.add("modal-error");
    }
  }
});

childrenDecr.addEventListener("click", function(event) {
  event.preventDefault();
  children.value--;
  if (children.value < 0) {
     children.value = 0;
     if (popup.classList.contains("modal-error")) {
       popup.classList.remove("modal-error");
     }
    else {
      popup.classList.add("modal-error");
    }
 }
});
