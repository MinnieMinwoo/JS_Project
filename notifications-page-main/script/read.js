function addReadClass() {
    if (this.classList.contains('read')) { return; };
    this.classList.add('read');
}

function setRead(e) {
    addReadClass.call(this);
    checkNum ();
}

function allRead() {
    const listSet = document.querySelectorAll('li');
    for(let list of listSet){
        addReadClass.call(list);
    }
    checkNum ();
}

const button = document.querySelector('#allRead');
button.addEventListener('click', allRead);