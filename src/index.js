import { faqsList } from "./faqsList.js";



document.addEventListener("DOMContentLoaded", onCreated);
let faqButtons, answers;

function onCreated() {

    let container = document.querySelector("#container");

    if (container) {
        elementBuilder()
    } else {
        console.log("!!!container not found");
    }

    faqButtons = document.querySelectorAll(".faqButton");
    answers = document.querySelectorAll(".answer");

    buttonClicks();

}

function toggleClass(index) {
    if (index < faqButtons.length) {
        faqButtons[index].classList.toggle("fa-square-plus");
        faqButtons[index].classList.toggle("fa-square-minus");
    };
    if (index < answers.length) {
        answers[index].classList.toggle("invisible");
        answers[index].classList.toggle("opacity-0");
        answers[index].classList.toggle("opacity-100");
        answers[index].classList.toggle("h-0");
        answers[index].classList.toggle("h-auto");
        answers[index].classList.toggle("p-3");
        answers[index].classList.toggle("mt-2");
    }
}

function elementBuilder() {
    faqsList.forEach((items) => {

        let { quest, answer } = items;

        let elementDivCard = document.createElement('div');
        let attrClassCard = document.createAttribute('class');

        attrClassCard.value = "card"
        elementDivCard.setAttributeNode(attrClassCard);
        container.appendChild(elementDivCard);

        let faqContainer = document.createElement('div');
        let attrClassFaqContainer = document.createAttribute('class');
        attrClassFaqContainer.value = "faqContainer"
        faqContainer.setAttributeNode(attrClassFaqContainer);
        elementDivCard.appendChild(faqContainer);

        let faqH2tag = document.createElement('h2');
        let attrClassFaqH2tag = document.createAttribute('class');
        attrClassFaqH2tag.value = "faqQuestText"
        faqH2tag.setAttributeNode(attrClassFaqH2tag);
        faqContainer.appendChild(faqH2tag);

        let faqItag = document.createElement('i');
        let attrClassFaqItag = document.createAttribute('class');
        attrClassFaqItag.value = "faqButton fa-regular fa-square-plus"
        faqItag.setAttributeNode(attrClassFaqItag);
        faqContainer.appendChild(faqItag);

        let answerDiv = document.createElement('div');
        let attrClassAnswerDiv = document.createAttribute('class');
        attrClassAnswerDiv.value = "answer invisible opacity-0 h-0"
        answerDiv.setAttributeNode(attrClassAnswerDiv);
        elementDivCard.appendChild(answerDiv);

        answerDiv.textContent = answer;

        faqH2tag.textContent = quest;

    });
}

function buttonClicks() {

    faqButtons.forEach((btn, index) => {

        btn.addEventListener("click", function () {

            let buttonLength = faqButtons.length;

            if (index < buttonLength) {
                toggleClass(index);
                for (let i = 0; i < buttonLength; i++) {
                    if (i != index) {
                        if (answers[i].classList.contains("opacity-100")) {
                            toggleClass(i);
                        };
                    }
                };
            }

            /* switch (index) {
                case 0:
                    toggleClass(0);
 
                    if (answers[1].classList.contains("opacity-100")) {
                        toggleClass(1);
                    };
 
                    if (answers[2].classList.contains("opacity-100")) {
                        toggleClass(2);
                    };
 
                    break;
                case 1:
                    toggleClass(1);
 
                    if (answers[0].classList.contains("opacity-100")) {
                        toggleClass(0);
                    };
 
                    if (answers[2].classList.contains("opacity-100")) {
                        toggleClass(2);
                    };
                    break;
                case 2:
                    toggleClass(2);
 
                    if (answers[0].classList.contains("opacity-100")) {
                        toggleClass(0);
                    };
 
                    if (answers[1].classList.contains("opacity-100")) {
                        toggleClass(1);
                    };
                    break;
            } */

        });


    })

}
