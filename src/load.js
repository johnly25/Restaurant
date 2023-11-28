const loadPage = () => {
    loadNav();
    loadMain();
}

const loadNav = () => {
    const container = document.getElementById("content");
    container.textContent = "";
    const nav = document.createElement('div');
    const logo = document.createElement('div');
    const ul = document.createElement('ul');
    const menu = document.createElement('li');
    const hours = document.createElement('li');
    const privateDining = document.createElement('li');
    const art = document.createElement('li');
    const shop = document.createElement('li');
    const delivery = document.createElement('li');
    const buttonItem = document.createElement('li');
    const button = document.createElement('button');

    menu.textContent = "menu";
    hours.textContent = "Hours & Location";
    privateDining.textContent = "Private Dining and Location";
    art.textContent = "Art";
    shop.textContent = "Shop";
    delivery.textContent = "Delivery";
    button.textContent = "Reserve Now";

    button.classList.add("reserve-btn");
    buttonItem.append(button);
    let items = [menu,hours, privateDining, art, shop, delivery, buttonItem];
    items.forEach(item => {
        ul.append(item);
    });

    logo.textContent = 'Logo';
    logo.classList.add("logo");
    nav.classList.add("nav");
    nav.append(logo);
    nav.append(ul);
    container.append(nav);
}

const loadMain = () => {
    const container = document.getElementById("content");
    const menuHeading = document.createElement("div");
    menuHeading.classList.add("menu-heading");
    menuHeading.textContent = "Menu";
    container.append(menuHeading);
    const menuButtons = document.createElement('div');
    menuButtons.classList.add("menu-buttons");
    const ul = document.createElement('ul');
    const items = ["Cocktails", "Lunch", "Dinner"];
    for(let item of items){
        const li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
    }
    menuButtons.append(ul);
    container.append(menuButtons);
}


export default loadPage;
//console.log("hello2");