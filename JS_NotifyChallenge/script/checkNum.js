function checkNum () {
    const allList = document.querySelectorAll("li");
    const notReadList = document.querySelectorAll(".read");
    const numSpan = document.querySelector("#num");
    numSpan.innerText = String(allList.length - notReadList.length);
}