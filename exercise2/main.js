const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

//********** First solution - forEach **********

// const showMessage = (e) => {
//   let textInput = e.target.value;

//   passwords.forEach((password, index) => {
//     if (password.toLowerCase() === textInput.toLowerCase()) {
//       div.textContent = messages[index];
//     }
//   });
// };

//********** Second solution - map **********

const LCPasswords = passwords.map((password) => password.toLowerCase());

const showMessage = (e) => {
  let LCTextInput = e.target.value.toLowerCase();

  for (let i = 0; i < LCPasswords.length; i++) {
    if (LCTextInput === LCPasswords[i]) {
      div.textContent = messages[i];
    }
  }
};

input.addEventListener("input", showMessage);
