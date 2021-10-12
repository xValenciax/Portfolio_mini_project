const icon = document.getElementById("icon");
const menu = document.getElementById("menu");

icon.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else {
        menu.classList.add('hidden');
    }
});

const show = document.getElementById("show");
const pics = document.getElementById("pics");
const change = document.getElementById("change");

show.addEventListener('click', () => {
    if(pics.classList.contains('hidden')){
        pics.classList.remove('hidden');
        change.innerHTML = "<span>Hide</span>";
    }
    else {
        pics.classList.add('hidden');
        change.innerHTML = "<span>Show</span>";
    }
});