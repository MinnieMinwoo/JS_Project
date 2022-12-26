let dataArr = [
    {
        data: "Mark Webber reacted to your recent post My first tournament today!",
        time: "1m ago",
    },
    {
        data: "Angela Gray followed you",
        time: "5m ago",
    },
    {
        data: "Jacob Thompson has joined your group Chess Club",
        time: "1 day ago",
    },
    {
        data: "Rizky Hasanuddin sent you a private message",
        time: "5 days ago",
        detail: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    },
    {
        data: "Kimberly Smith commented on your picture",
        time: "1 week ago",
    },
    {
        data: "Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
    },
    {
        data: "Anna Kim left the group Chess Club",
        time: "2 weeks ago",
    }

];

let notifyArr =[];


function notifyItem(data, time, detail) {
    this.data = data;
    this.time = time;
    this.detail = detail;
}

function importData(arr) {
    arr.forEach(e => {
        if (e.detail === undefined) {
            e.detail = "";
        }
        const inputElement = new notifyItem(e.data, e.time, e.detail);
        notifyArr.push(inputElement);
    });
}

function createList(obj) {
    const li = document.createElement("li");
    const textData = document.createElement("p");
    const timeData = document.createElement("p");
    textData.innerText = obj.data;
    timeData.innerText = obj.time;
    li.appendChild(textData);
    li.appendChild(timeData);
    if (obj.detail !== "") {
        const detailData = document.createElement("p");
        detailData.innerText = obj.detail;
        li.appendChild(detailData);
    }
    return li;
}

function pushData(obj) {
    const ul = document.querySelector("ul");
    const li = createList(obj);
    ul.appendChild(li);
    li.addEventListener('click', setRead);
}

importData(dataArr);
dataArr.forEach(e => { pushData(e); });
checkNum ();