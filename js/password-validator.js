const entryPassword = document.querySelector("#entrypassword");
const acceptPassword = document.querySelector("#acceptpassword");
const signinForm = document.querySelector(".signin-form");
const passwordError = document.querySelector(".password-error");


const passwordValid = (str1, str2) => {
    return str1 === str2;
}

function validateForm(e) {
    const form = e.target;
    if (form.checkValidity()) {
      if (!passwordValid(entryPassword.value, acceptPassword.value)) {
            acceptPassword.classList.add('invalid');
            passwordError.classList.add('invalid');
            e.stopImmediatePropagation();
            e.preventDefault();
      }
      else {
        acceptPassword.classList.remove('invalid');
        acceptPassword.classList.add('valid');
        passwordError.classList.remove('invalid');
      }
    }
    else {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  };

signinForm.noValidate = true;
signinForm.addEventListener("submit", validateForm);
