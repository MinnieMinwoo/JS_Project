function addReadClass(e) {
    if (this.classList.contains('read')) { return; };
    this.classList.add('read');
}

function setRead(e) {
    addReadClass(e);
    checkNum ();
}

function allRead() {
    const listSet = document.querySelectorAll('li');
    console.log(listSet);
    for(let list of listSet){
        addReadClass.call(list);
    }
    checkNum ();
}

const button = document.querySelector('#allRead');
button.addEventListener('click', allRead);

/*
    listSet.forEach((list) => {
        if (list.classList.contains('read') === false) { list.classList.add('read'); }
    });
*/