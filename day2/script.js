let foods = ["Apples","Potatoes","Oranges","Bananas"];
foods.sort(); // sort alphabetically
let list = document.querySelector("#food");
for (i = 0; i < foods.length; i++) {
    list.insertAdjacentHTML('beforeend', '<button class="draw meet">'+foods[i]+'</button>');
};