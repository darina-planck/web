let isMenuOpen = false;

document.querySelector('#mobile-menu-btn').onclick = function(){
    if (isMenuOpen === false) {
        document.getElementsByClassName('svgClose')[0].style= "display: none;";
        document.getElementsByClassName('svgOpen')[0].style= "display: inline;";
        document.getElementsByClassName('mob-menu')[0].style= "animation-name: menuOpen; animation-duration: 2s; animation-iteration-count: 1; top: 80px;";
    } else {
        document.getElementsByClassName('svgClose')[0].style= "display: inline;";
        document.getElementsByClassName('svgOpen')[0].style= "display: none;";
        document.getElementsByClassName('mob-menu')[0].style= "animation-name: menuClose; animation-duration: 2s; animation-iteration-count: 1; top: 100vh;";
        
    }
    isMenuOpen = !isMenuOpen;
}

function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input && error) {
        input.classList.add("error-border");
        error.textContent = message;
    }
}

function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input && error) {
        input.classList.remove("error-border");
        error.textContent = "";
    }
}

function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Очистка всех ошибок перед новой проверкой
    clearError("name", "name-error");
    clearError("tg", "tg-error");
    clearError("comment", "comment-error");

    // Проверка имени: только буквы
    const name = document.getElementById("name").value.trim();
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
    if (name === "" || !nameRegex.test(name)) {
        showError("name", "name-error", "В имени допустимы только буквы");
        isValid = false;
    }

    // Проверка Телеграма: должен начинаться с @ или с https://t.me/
    const tg = document.getElementById("tg").value.trim();
    const tgRegex = /^(@|https:\/\/t\.me\/)/;
    if (tg === "" || !tgRegex.test(tg)) {
        showError("tg", "tg-error", "Телеграм должен начинаться с @ или https://t.me/");
        isValid = false;
    }

    // Проверка сообщения: не должно быть пустым
    const comment = document.getElementById("comment").value.trim();
    if (comment === "") {
        showError("comment", "comment-error", "Сообщение не может быть пустым");
        isValid = false;
    }

    // Если форма не валидна, предотвращаем отправку
    if (!isValid) {
        event.preventDefault();
    } else {
        // Отображаем сообщение об успешной отправке
        document.getElementById("success-message").style.display = "block";
    }
    return isValid;
}






// document.querySelector(".contact-me").addEventListener('click', (event) => {
//     event.preventDefault();
//     alert("Вы нажали на кнопку!");
// });
// document.querySelector(".green").addEventListener('click', (event) => {
//     event.preventDefault(); 
//     alert("Вы нажали на кнопку!");
// });
// let surname = document.querySelector(".inut-text-surname");
// let name = document.querySelector(".inut-text-name");
// let telegram = document.querySelector(".inut-text-telegram");
// let inputSurname = document.querySelector('#input-surname');
// let inputName = document.querySelector('#input-name');
// let inputTelegram = document.querySelector('#input-telegram');


// document.addEventListener("DOMContentLoaded", () => {
//     const menuToggle = document.querySelector(".menu-toggle");
//     const menu = document.querySelector(".menu");

//     menuToggle.addEventListener("click", () => {
//         menu.classList.toggle("show");
//     });
// });






