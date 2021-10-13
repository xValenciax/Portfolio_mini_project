const load = document.getElementById("load");
const more = document.getElementById("more");
const chnge = document.getElementById("chng");

load.onclick = function (){
    if(more.classList.contains("hidden")){
        more.classList.remove("hidden");
        chnge.innerHTML = "<span>less</span>";
    }
    else{
        more.classList.add("hidden");
        chnge.innerHTML = "<span>more</span>";
    }
};

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

const html = document.documentElement;
const dark = document.querySelector("#dark");
const switcher = document.querySelector("#switch");

dark.onclick = function (){
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        switcher.innerHTML = "<span>light</span>";
        window.localStorage.setItem("theme", "light");
    }
    else{
        html.classList.add("dark");
        switcher.innerHTML = "<span>Dark</span>";
        window.localStorage.setItem("theme", "dark");
    }
};