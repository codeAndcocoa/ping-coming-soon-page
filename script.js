//Variables
const emailInputField = document.getElementById("email");
const notifyButton = document.getElementById("subscribe-btn");
const emptyErrorMessage = document.querySelector(".empty-error-msg");
const formatErrorMessage = document.querySelector(".format-error-msg");
const messagesCell = document.querySelector('.cell3');

const emailInputError = () => {
   const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInputField.value === "") {
    emailInputField.style.border = "1.1px solid hsl(354, 100%, 66%)";
    emptyErrorMessage.style.display = "block";
    messagesCell.style.display = "block";
    formatErrorMessage.style.display = "none";
  }else if(emailInputField.value !== "" && (!regex.test(emailInputField.value))){
    emailInputField.style.border = "1.1px solid hsl(354, 100%, 66%)";
    formatErrorMessage.style.display = "block";
    messagesCell.style.display = "block";
    emptyErrorMessage.style.display = "none";
  }else{
    emailInputField.value="" ;
    formatErrorMessage.style.display = "none";
    emptyErrorMessage.style.display = "none";
    messagesCell.style.display="none";
    emailInputField.style.border ="";
  } 
};

notifyButton.addEventListener("click", () => {
  emailInputError();
});
