const textOfParagraph = document.createElement("p");

function getFromLocalStorage(city) {
    const value = window.localStorage.getItem(city);
    const container = document.getElementById(`container-${city}`);
    if (value) {
        textOfParagraph.innerHTML = value;
        container.appendChild(textOfParagraph);
    }
}

function clearText(city) {
    const container = document.getElementById(`container-${city}`);
    container.removeChild(textOfParagraph)
}


