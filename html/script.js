/* Task steps:
* Add event listener to ‘.addBtn’ to add another task to list (add another li element)
* Add li element to list with text value in input
* If input field is empty show alert with message ‘Please enter task name’
* Add ‘span’ element with ‘X’ or ‘\u00D7’ to ‘li’ elements (indicator for clickable item for removing task)
* Hide task when clicked on close button (‘close’ class)
* Add ‘checked’ class to LI element to mark done tasks

 */

function addNewTask() {
    console.log('addNewTask');
    const taskName = document
        .querySelector('input#taskInput').value;

    if (!taskName) {
        return alert('Please enter task name');
    }

    const newLi = document
        .createElement('li');
    newLi.textContent = taskName;

    const span = document
        .createElement('span');
    span.innerText = '\u00D7';
    span.classList.add('close');
    newLi.appendChild(span);

    document.getElementById('taskList')
        .appendChild(newLi);

    addXEventListeners();
}

function addMissingXs() {
    const listItems =
        document.getElementsByTagName('li');

    for(let i = 0; i< listItems.length; i++) {
        const li = listItems[i];
        const span = document
            .createElement('span');
        span.innerText = '\u00D7';
        span.classList.add('close');
        li.appendChild(span);

    }

}

function addXEventListeners() {
    const xButtons = document.querySelectorAll('.close')

    for(let i = 0; i < xButtons.length; i++) {
        const xButton = xButtons[i];
        xButton.onclick = function () {
            this.parentElement
                .classList.add('displayNone');
        }

        // xButton.onclick = function (){};

/*        xButton.addEventListener('click', function () {
            this.parentElement
                .classList.add('displayNone');
        }, false);*/
    }

}

function addCheckedListener() {
    document.querySelector('#taskList')
        .addEventListener('click', (event) => {
            console.log('ul click event', event);

            // 1 == '1' // true
            // 1 === '1' // false

            if (event.target.nodeName === 'LI') {
                event.target.classList.toggle('checked');
            }

        }, false);
}

addMissingXs();
addXEventListeners();
addCheckedListener();

function mouseMove1()
{
    console.log('mouse move 1');
}

document.body.addEventListener('mousemove', mouseMove1, false);

document.body.removeEventListener('mousemove', mouseMove1, false);
document.body.addEventListener('mousemove', function ()
{
    console.log('mouse move 2');
}, false);

