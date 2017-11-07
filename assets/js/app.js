function add() {
    var twtNewContent = document.getElementById("new-twt-content");
    var twtBtn = document.getElementById("twt-btn");
    var timeLine = document.getElementById("timeline");
    
    var newTwt = document.createElement("div");
    var newContent = document.createElement("p");
    var dateSpan = document.createElement("span");

    newTwt.className = "new-twt";
    
    timeLine.appendChild(newTwt)
    newTwt.appendChild(newContent);
    newTwt.appendChild(dateSpan)
    dateSpan.textContent = new Date();
    newContent.textContent = twtNewContent.value;
};
