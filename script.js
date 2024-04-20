//Variables
const emailInputField = document.getElementById("email");
const notifyButton = document.getElementById("subscribe-btn");
const errorMessage = document.querySelector(".error-msg");

const emailInputError = () => {
  if (emailInputField.value === "") {
    emailInputField.style.border = "1.1px solid hsl(354, 100%, 66%)";
    errorMessage.style.display = "block";
    emailInputField.placeholder ='example@email/com';
    emailInputField.classList.add('black');
  }else{
    return emailInputField  = true;
  }
};

notifyButton.addEventListener("click", () => {
  emailInputError();
});
