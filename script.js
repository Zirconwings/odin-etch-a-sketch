const container = document.querySelector("#container");
const body = document.querySelector("body");
const button = document.createElement("button");
const title = document.createElement("h1");
title.textContent = "Etch A Sketch";
button.textContent = "Reset";
button.style.flex = "1 0 100%"
body.insertBefore(title, container);
body.insertBefore(button, container);
function newGrid(size){
    const rm = document.querySelectorAll("div div");
    rm.forEach((e) => {container.removeChild(e)})
    for(let i = 0; i<size**2; ++i){
        const div = document.createElement("div");
        div.style.height = 1/size*100 + "%";
        div.style.width = 1/size*100 + "%";
        let colors = ["red", "blue", "green"];
        choice = Math.floor(Math.random() * colors.length);
        div.style.backgroundColor = colors[choice];
        div.style.opacity = 0
        div.addEventListener("mouseover", () => {
            div.style.opacity = `${Number(div.style.opacity)+0.1}`;
        });
        container.appendChild(div);
    }   
}
newGrid(16);
button.addEventListener("click",() => {
    let size = +prompt("Enter an integer for the new nxn grid. Max: 100");
    while (!Number.isInteger(size) || size>100){
        size = +prompt("Enter an integer for the new nxn grid. Max: 100");
    }
    newGrid(size);
    size = null;
});