    const loadCocktails = () => {
        const content = document.getElementById("content");
        const container = document.createElement("div");
        const border = document.createElement("div");
        const title = document.createElement("div");
        let menu = document.createElement("div");

        border.classList.add("border");
        container.classList.add("menu-container");
        title.classList.add("title");
        menu.classList.add("cocktails");

        title.textContent = "Cocktails"

        menu.append(title);
        menu = addDrink(menu, "Firecracker ", "251", "Illegal Mezcal, Laphroaig 10yr Islay Scotch, Blackened Bird’s Eye Chili Tincture, Grapefruit Bitters, Agave");
        menu = addDrink(menu, "Firecracker ", "251", "Illegal Mezcal, Laphroaig 10yr Islay Scotch, Blackened Bird’s Eye Chili Tincture, Grapefruit Bitters, Agave");
        menu = addDrink(menu, "Firecracker ", "251", "Illegal Mezcal, Laphroaig 10yr Islay Scotch, Blackened Bird’s Eye Chili Tincture, Grapefruit Bitters, Agave");
        menu = addDrink(menu, "Firecracker ", "251", "Illegal Mezcal, Laphroaig 10yr Islay Scotch, Blackened Bird’s Eye Chili Tincture, Grapefruit Bitters, Agave");

        border.append(menu);
        container.append(border);
        content.append(container);
    }

    function addDrink(menu, drinkText, priceText, ingredientsText) {
        const item = document.createElement("div");
        const drinkcontainer = document.createElement("div");
        const drink = document.createElement("span");
        const price = document.createElement("span");
        const ingredients = document.createElement("div");
       
        drink.classList.add("drink");
        price.classList.add("price");
        item.classList.add("cocktails-item");

        drink.textContent = drinkText;
        price.textContent = priceText;
        ingredients.textContent = ingredientsText;
        
        drinkcontainer.append(drink,price)
        item.append(drinkcontainer, ingredients);
        menu.append(item);
        return menu;
    }
    export default loadCocktails;