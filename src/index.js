import { faqsList } from "./faqsList.js";



document.addEventListener("DOMContentLoaded", onCreated);

function onCreated() {

    let container = document.querySelector("#container");

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
        attrClassAnswerDiv.value = "answer hidden"
        answerDiv.setAttributeNode(attrClassAnswerDiv);
        elementDivCard.appendChild(answerDiv);

        answerDiv.textContent = answer;

        faqH2tag.textContent = quest;

    });

    let faqButtons = document.querySelectorAll(".faqButton");
    let answers = document.querySelectorAll(".answer");

    faqButtons.forEach((btn, index) => {
        btn.addEventListener("click", function (e) {

            console.log(e.target, index);

            switch (index) {
                case 0:
                    toggleClass(0);

                    if (answers[1].classList.contains("block")) {
                        toggleClass(1);
                    };

                    if (answers[2].classList.contains("block")) {
                        toggleClass(2);
                    };

                    break;

                case 1:
                    toggleClass(1);

                    if (answers[0].classList.contains("block")) {
                        toggleClass(0);
                    };

                    if (answers[2].classList.contains("block")) {
                        toggleClass(2);
                    };

                    break;

                case 2:
                    toggleClass(2);

                    if (answers[0].classList.contains("block")) {
                        toggleClass(0);
                    };

                    if (answers[1].classList.contains("block")) {
                        toggleClass(1);
                    };

                    break;




            }
        });


    })


    function toggleClass(index) {
        faqButtons[index].classList.toggle("fa-square-plus");
        faqButtons[index].classList.toggle("fa-square-minus");
        answers[index].classList.toggle("hidden");
        answers[index].classList.toggle("block");
    }

}