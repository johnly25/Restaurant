const loadLunch = () => {
    const content = document.getElementById("content");
    const container = document.createElement("div");
    const border = document.createElement("div");
    const title = document.createElement("div");
    let menu = document.createElement("div");

    border.classList.add("border");
    container.classList.add("menu-container");
    title.classList.add("title");
    menu.classList.add("lunch");
    title.textContent = "Lunch"

    menu.append(title);
    menu = addItem(menu, "Chicken ", "25", "Chicken");
    menu = addItem(menu, "Chicken ", "25", "Chicken");
    menu = addItem(menu, "Chicken ", "25", "Chicken");
    menu = addItem(menu, "Chicken ", "25", "Chicken");
    menu = addItem(menu, "Chicken ", "25", "Chicken");


    border.append(menu);
    container.append(border);
    content.append(container);
}

function addItem(menu, foodText, priceText, ingredientsText) {
    const item = document.createElement("div");
    const container = document.createElement("div");
    const food = document.createElement("span");
    const price = document.createElement("span");
    const ingredients = document.createElement("div");
   
    food.classList.add("food");
    price.classList.add("price");
    item.classList.add("cocktails-item");

    food.textContent = foodText;
    price.textContent = priceText;
    ingredients.textContent = ingredientsText;

    container.append(food,price)
    item.append(container, ingredients);
    menu.append(item);
    return menu;
}

export default loadLunch;