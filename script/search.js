"use strict";
(function(){
let gifs = [];
let container = document.querySelector('.container');

function onBtnclick() {
    let q = document.getElementById("input").value;
    fetch("https://api.giphy.com/v1/gifs/search?api_key=lAvIDsMHwKqLJQCQbeALtiGzT0gU06RW&q=" + q + "&limit=5&offset=0&rating=g&lang=ru")
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";
            gifs = data.data
            gifs.forEach(element => {
                container.innerHTML += `<img style="width:250px" src=${element.images.original.url}>`
            });
        })
        .catch(error => console.log(error));
}

document.querySelector('#search').addEventListener('click', onBtnclick);
})();