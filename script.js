let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
let button = document.querySelector("button");
let errormessage = document.querySelector(".error");

let passwordvalue = "";
let confirmvalue = "";

password.addEventListener("input", () => {
  console.log(passwordvalue);
  return (passwordvalue = password.value);
});

confirm.addEventListener("input", () => {
  console.log(confirmvalue);
  return (confirmvalue = confirm.value);
});

button.addEventListener("click", () => thesame());

function thesame() {
  if (passwordvalue != "" && passwordvalue === confirmvalue) {
    password.setCustomValidity("");
    confirm.setCustomValidity("");
    errormessage.setAttribute("hidden", true);
  } else if (passwordvalue != "" && passwordvalue != confirmvalue) {
    password.setAttribute("class", "invalidfield");
    confirm.setAttribute("class", "invalidfield");
    errormessage.removeAttribute("hidden");
  }
}
