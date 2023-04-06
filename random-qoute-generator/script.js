const btnEl = document.getElementById("btn");
const qouteEl = document.getElementById("qoute");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQoute(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        qouteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const response = await fetch(apiURL);
        const data = await response.json();
        const qouteContent = data.content;
        const authorContent = data.author;
        qouteEl.innerText = qouteContent;
        authorEl.innerText = "~ "+authorContent; 
        btnEl.innerText = "Get a qoute";
        btnEl.disabled = false;
    } catch (error) {
        qouteEl.innerText = "Error, try again later";
        authorEl.innerText = "Error, try again later";
        btnEl.innerText = "Get a qoute";
        btnEl.disabled = false;
    }
}

getQoute();

btnEl.addEventListener("click",getQoute);