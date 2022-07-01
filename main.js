//Javascript document

// Change Navbar styles on scroll

window.addEventListener('scroll', () => {
	document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

// SHow/Hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const cloesBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
	menu.style.display = "flex";
	cloesBtn.style.display = "inline-block";
	menuBtn.style.display = "none";
})

// Close nav menu
const cloesNav = () => {
	menu.style.display = "none";
	cloesBtn.style.display = "none";
	menuBtn.style.display = "inline-block";
}

cloesBtn.addEventListener("click", cloesNav)


function setFormMessage(formElement, type, message) {
	const messageElement = formElement.querySelector(".form__message");
	
	messageElement.textContent = message;
	messageElement.classList.remove("form__message--success", "form__message--error");
	messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
	inputElement.classList.add("form__input--error");
	inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.querySelector("#login");
	const createAccountForm = document.querySelector("#createAccount");
	
	document.querySelector("#linkCreateAccount").addEventListener("click", e => {
		e.preventDefault();
		loginForm.classList.add("form--hidden");
		createAccountForm.classList.remove("form--hidden");
	})
	
	document.querySelector("#linkLogin").addEventListener("click", e => {
		e.preventDefault();
		loginForm.classList.remove("form--hidden");
		createAccountForm.classList.add("form--hidden");
	})
	
	loginForm.addEventListener("submit", e => {
		e.preventDefault();
		
		setFormMessage(loginForm, "error", "Invalid username/password combination");
	})
	
	document.querySelectorAll(".form__input").forEach(inputElement => {
		inputElement.addEventListener("blur", e => {
			if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
				setInputError(inputElement, "Username must be at least 10 characters in length");
			}
		})
	})
})









