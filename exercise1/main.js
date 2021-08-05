const input = document.getElementById("pass");
const div = document.querySelector(".message");
const passwords = ["user", "wiosna"];
const messages = ["wyjechałam na zawsze", "piękna pora roku"];

input.addEventListener("input", (e) => {
  div.textContent = "";
  let text = e.target.value;

  passwords.forEach((password, index) => {
    if (password === text) {
      console.log(password, index);
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
});

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
