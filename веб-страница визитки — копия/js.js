document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Пожалуйста, заполните все поля!");
    } else if (!email.includes("@")) {
        alert("Введите корректный email!");
    } else {
        alert("Форма успешно отправлена!");
    }
});

document.getElementById("otherForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let otherName = document.getElementById("otherName").value;
    let otherAge = document.getElementById("otherAge").value;

    let checkboxes = document.querySelectorAll(".interests");
    let isCheckedInterests = Array.from(checkboxes).some(x => x.checked);
    let message = document.getElementById("message")

    if (otherName === "" || otherAge === "") {
        alert("Пожалуйста, заполните все поля!");
    } else if (otherAge > 120 || otherAge < 0) {
        alert("Введите корректный возраст!");
    } else if (!isCheckedInterests) {
        alert("Пожалуйста, выберите хотя бы 1 интерес!");
    } else if (message.length > 200) {
        alert("Сообщение должно содержать максимум 200 символов!");
    }
});



document.querySelector(".buttonAddInterests").addEventListener('click', (event) => {
    event.preventDefault(); 

    let interest = document.querySelector(".interest");
    let inputInterest = document.createElement('input');
    let buttonAdd = document.createElement('button');
    let br = document.createElement('br');

    buttonAdd.textContent = "+";
    inputInterest.setAttribute("type", "text");
    inputInterest.setAttribute('placeholder', 'Введите интерес...');
    interest.appendChild(inputInterest);
    interest.appendChild(buttonAdd);
    interest.appendChild(br);

    buttonAdd.addEventListener('click', (event) => {
        event.preventDefault();
        interest.removeChild(br);
        interest.removeChild(buttonAdd);
        interest.removeChild(inputInterest);
        let textNewInterest = inputInterest.value;

        if (textNewInterest == "") {
            alert("Введите новый интерес!");
        } else {
            let checkboxInput = document.createElement('input');
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.setAttribute("name", "interests");
            checkboxInput.setAttribute("checked", "checked");
            checkboxInput.className = "interests";
            let textPInterest = document.createElement('label');
            let spanInterest = document.createElement('sapn');
            spanInterest.textContent = textNewInterest;

            interest.appendChild(textPInterest);
            textPInterest.appendChild(checkboxInput);
            textPInterest.appendChild(spanInterest);
            textPInterest.appendChild(document.createElement('br'));
        }
    });
});

const ta = document.querySelector(".message");
const counter = document.querySelector(".counter-text__current");
ta.addEventListener('input', onInput)

function onInput(evt) {
    const length = evt.target.value.length
    counter.innerText = length
}

document.querySelector(".submit").addEventListener('click', (event) => {
    event.preventDefault();

    let div = document.querySelector(".text-field");
    div.innerHTML = "";

    let name = document.getElementById("otherName").value;
    let age = document.getElementById("otherAge").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let interests = Array.from(document.querySelectorAll('input[name="interests"]:checked')).map(interest => interest.nextElementSibling.textContent).join(", ");
    let comment = document.querySelector(".message").value;

    let resultHTML = `
        <h3>Ваши данные:</h3>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        <p><strong>Пол:</strong> ${gender}</p>
        <p><strong>Интересы:</strong> ${interests}</p>
    `;
    if (comment != ""){
        resultHTML += `<p><strong>Комментарий:</strong> ${comment}</p>`
    }
    div.innerHTML = resultHTML;
});



function handleFormSubmit(event) {
    event.preventDefault()
}

const applicantForm = document.getElementById('otherForm')
applicantForm.addEventListener('submit', handleFormSubmit)
