const allLiElements = document.getElementsByTagName("LI");
for (let i = 0; i < allLiElements.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    allLiElements[i].appendChild(span);
}

const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        const liElement = this.parentElement;
        liElement.classList.add('displayNone');
    }
}

const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addNewTask() {
    const inputValue = document.getElementById("taskInput").value;

    if (!inputValue) return alert('Please enter task name');

    const li = document.createElement("li");
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const liElement = this.parentElement;
            liElement.classList.add('displayNone');
        }
    }
}