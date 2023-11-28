import './styles.css';
import myImage from "./watermelon.jpg"
import loadPage from "./load";
import loadCocktails from "./cocktails"
import loadLunch from "./lunch";
import loadDinner from "./dinner";

start();

function start() {
    loadPage();
    loadCocktails();
    addListeners();
}

function addListeners() {
    const buttons = document.querySelectorAll(".menu-buttons ul li");
    buttons.forEach(button => {
        button.addEventListener("click", reload);
    });
}
function reload(e) {
    if (e.target.textContent.toUpperCase() == "COCKTAILS") {
        loadPage();
        loadCocktails();
    } else if (e.target.textContent.toUpperCase() == "LUNCH") {
        loadPage();
        loadLunch();
    } else if (e.target.textContent.toUpperCase() == "DINNER") {
        loadPage();
        loadDinner();
    } else {

    }
    addListeners();
}
