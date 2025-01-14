import { onUpdateCard, onDeleteCard } from "../../action/stateActions.js";
import { CardDynamicButtons } from "./buttons/cardDynamicButtons.js";
import { CardContentInput } from "./input/cardContentInput.js";
import { CardTitleInput } from "./input/cardTitleInput.js";

export const DynamicCard = (card, onCardDelete, onCardUpdate) => {
    const { title, content } = card;

    const fragment = document.createDocumentFragment();

    const cardFormContainer = document.createElement("li");
    cardFormContainer.className = "card-template";

    let currentTitle = title;
    let currentContent = content;

    const titleInput = CardTitleInput({ title });
    cardFormContainer.appendChild(titleInput);

    const contentInput = CardContentInput({ content });
    cardFormContainer.appendChild(contentInput);

    cardFormContainer.querySelectorAll(['textarea', 'input']).forEach(element => element.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT') currentTitle = e.target.value;
        if (e.target.tagName === 'TEXTAREA') currentContent = e.target.value;
    }));

    cardFormContainer.appendChild(CardDynamicButtons());

    cardFormContainer.addEventListener("click", (e) => {
        if (e.target.closest("button").classList.contains("card-button-cancel")) {
            onCardDelete();
        }
        if (e.target.closest("button").classList.contains("card-button-submit")) {
            onCardUpdate({
                title: currentTitle,
                content: currentContent,
                date: new Date(),
                author: '박준혁',
                readOnly: true,
            })
        }
    })

    fragment.appendChild(cardFormContainer);
    return fragment;
}