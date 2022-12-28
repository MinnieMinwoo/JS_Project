let dataArr = [
    {   
        user: "Mark Webber",
        userImage: "assets/images/avatar-mark-webber.webp",
        type: "react",
        post: "My first tournament today!",
        time: "1m ago",
    },
    {
        user: "Angela Gray",
        userImage: "assets/images/avatar-angela-gray.webp",
        type: "follow",
        data: "Angela Gray followed you",
        time: "5m ago",
    },
    {
        user: "Jacob Thompson",
        userImage: "assets/images/avatar-jacob-thompson.webp",
        type: "join",
        group: "Chess Club",
        time: "1 day ago",
    },
    {
        user: "Rizky Hasanuddin",
        userImage: "assets/images/avatar-rizky-hasanuddin.webp",
        type: "message",
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: "5 days ago",
    },
    {
        user: "Kimberly Smith",
        userImage: "assets/images/avatar-kimberly-smith.webp",
        type: "commentPicture",
        replyPicture: "assets/images/image-chess.webp",
        time: "1 week ago",
    },
    {
        user: "Nathan Peterson",
        userImage: "assets/images/avatar-nathan-peterson.webp",
        type: "react",
        post: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
    },
    {
        user: "Anna Kim",
        userImage: "assets/images/avatar-anna-kim.webp",
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
    
    const profileSpan = document.createElement("Span");
    const profileImg = document.createElement("img");
    const contentSpan = document.createElement("span");
    const nameSpan = document.createElement("span");
    const dataSpan = document.createElement("span");
    const detailSpan = document.createElement("span");
    const readSpan = document.createElement("span");
    const timePart = document.createElement("p");
    const commentSpan = document.createElement("span");
    const commentImg = document.createElement("img");
    const messagePart = document.createElement("p");

    //set html
    profileImg.src = obj.userImage;
    timePart.innerText = obj.time;
    nameSpan.innerText = obj.user;
    readSpan.innerText = " ●";
    readSpan.classList.add('readDot');
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
    if (obj.replyPicture !== undefined) { commentImg.src = obj.replyPicture; }

    //set css
    li.style.display ="flex";
    profileSpan.style.marginTop = "5px";
    profileImg.style.width = "40px";
    profileImg.style.borderRadius = "20px";    
    contentSpan.style.flexGrow = "1";
    contentSpan.style.marginTop = "5px";
    contentSpan.style.marginLeft = "20px";
    nameSpan.style.fontWeight = "bold";
    dataSpan.style.color = "hsl(219, 12%, 42%)";
    if (obj.group !== undefined) {detailSpan.style.color = "hsl(219, 85%, 26%)"; }
    else {detailSpan.style.color = "hsl(224, 21%, 14%)"; }
    detailSpan.style.fontWeight = "bold";
    readSpan.style.color = "hsl(1, 90%, 64%)";
    timePart.style.margin = "5px 0";
    timePart.style.color = "hsl(219, 12%, 42%)";
    if (messagePart !== undefined) {
        messagePart.style.marginBottom = "5px";
        messagePart.style.padding = "10px";
        messagePart.style.borderRadius = "5px";
        messagePart.style.color = "hsl(219, 12%, 42%)";
        messagePart.style.border = "1px solid hsl(219, 14%, 63%)";
    }
    if (obj.replyPicture !== undefined) {
        commentSpan.style.marginTop = "5px";
        commentImg.style.width = "40px";
        commentImg.style.borderRadius = "5px"; 
    }

    //apply and return
    li.appendChild(profileSpan);
    profileSpan.appendChild(profileImg);
    li.appendChild(contentSpan);
    contentSpan.appendChild(nameSpan);
    contentSpan.appendChild(dataSpan);
    if (detailSpan.innerText !== "") { contentSpan.appendChild(detailSpan); }
    contentSpan.appendChild(readSpan);
    contentSpan.appendChild(timePart);
    if (messagePart.innerText !== "") { contentSpan.appendChild(messagePart); }
    if (obj.replyPicture !== undefined) {
        li.appendChild(commentSpan);
        commentSpan.appendChild(commentImg);
    }
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