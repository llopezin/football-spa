import { contentDiv } from "../utils/elements";
import { navDiv } from "../utils/elements";
import { navButtons } from "../utils/elements";


export function replaceMainContent(newContent) {
    contentDiv.innerHTML = null;
    contentDiv.appendChild(newContent);
}

export function reFormatDate(date) {
    const dateWithNoTime = date.slice(0, 10)
    const dateReversed = dateWithNoTime.split("-").reverse().join("-");
    return dateReversed;
}

navDiv.addEventListener('click', changeActiveClass);
function changeActiveClass() {
    if (event.target.classList.contains('is-active') === false) {
        for (let i = 0; i < navButtons.length; i++) {
            const button = navButtons[i];

            button.classList.toggle('is-active')
            console.log(button)
        }
    }
}

export function hideSpinner(type) {
    const spinner = document.querySelector(type);
    console.log(spinner)
    spinner.style.display = 'none'
}

