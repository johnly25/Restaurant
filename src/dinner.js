const loadDinner = () => {
    const content = document.getElementById("content");
    const container = document.createElement("div");
    const border = document.createElement("div");
    const title = document.createElement("div");
    let menu = document.createElement("div");

    border.classList.add("border");
    container.classList.add("menu-container");
    title.classList.add("title");
    menu.classList.add("dinner");
    title.textContent = "Dinner"

    menu.append(title);
    menu = addItem(menu, "Steak ", "25", "Beef");
    menu = addItem(menu, "Steak ", "25", "Beef");
    menu = addItem(menu, "Steak ", "25", "Beef");
    menu = addItem(menu, "Steak ", "25", "Beef");
    menu = addItem(menu, "Steak ", "25", "Beef");


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

export default loadDinner;