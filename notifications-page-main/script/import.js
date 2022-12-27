let dataArr = [
    {   
        user: "Mark Webber",
        type: "react",
        post: "My first tournament today!",
        time: "1m ago",
    },
    {
        user: "Angela Gray",
        type: "follow",
        data: "Angela Gray followed you",
        time: "5m ago",
    },
    {
        user: "Jacob Thompson",
        type: "join",
        group: "Chess Club",
        time: "1 day ago",
    },
    {
        user: "Rizky Hasanuddin",
        type: "message",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: "5 days ago",
    },
    {
        user: "Kimberly Smith",
        type: "commentPicture",
        time: "1 week ago",
    },
    {
        user: "Nathan Peterson",
        type: "react",
        post: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
    },
    {
        user: "Anna Kim",
        type: "left",
        group: "Chess Club",
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
    
    const nameSpan = document.createElement("span");
    const dataSpan = document.createElement("span");
    const detailSpan = document.createElement("span");
    const messagePart = document.createElement("p");
    const timePart = document.createElement("p");

    timePart.innerText = obj.time;
    nameSpan.innerText = obj.user;

    //set html
    switch (obj.type) {
        case "join":
            dataSpan.innerText = ` has joined your group`;
            detailSpan.innerText = ` ${obj.group}`;
            break;
        case "left":
            dataSpan.innerText = ` left the group`;
            detailSpan.innerText = ` ${obj.group}`;
            break;
        case "react":
            dataSpan.innerText = ` reacted to your recent post`;
            detailSpan.innerText = ` ${obj.post}`;
            break;
        case "commentPicture":
            dataSpan.innerText = ` commented on your picture`;
            break;
        case "follow":
            dataSpan.innerText = ` followed you`;
            break;
        case "message":
            dataSpan.innerText = ` Rizky Hasanuddin sent you a private message`;
            messagePart.innerText = ` ${obj.message}`;
            break;
        default:
            break;
    }

    //set css
    nameSpan.style.fontWeight = "bold";
    dataSpan.style.color = "hsl(219, 12%, 42%)";
    console.log(obj.group)
    if (obj.group !== undefined) {detailSpan.style.color = "hsl(219, 85%, 26%)"; }
    else {detailSpan.style.color = "hsl(224, 21%, 14%)"; }
    detailSpan.style.fontWeight = "bold";
    timePart.style.color = "hsl(219, 12%, 42%)";
    if (messagePart !== undefined) {
        messagePart.style.color = "hsl(219, 12%, 42%)";
        messagePart.style.border = "1px solid hsl(219, 14%, 63%)";
        messagePart.style.borderRadius = "5px";
    }

    //apply and return
    li.appendChild(nameSpan);
    li.appendChild(dataSpan);
    if (detailSpan.innerText !== "") { li.appendChild(detailSpan)}
    li.appendChild(timePart);
    if (messagePart.innerText !== "") { li.appendChild(messagePart); }

    return li
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