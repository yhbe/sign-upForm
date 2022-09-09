let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
let button = document.querySelector("button");

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
    console.log("True!");
  } else if (passwordvalue != "" && passwordvalue != confirmvalue) {
    password.setCustomValidity("Invalid field.");
    confirm.setCustomValidity("Invalid field.");
  }
}
