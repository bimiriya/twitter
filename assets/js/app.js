function contar() { 
    var max = "140"; 
    var cadena = document.getElementById("new-twt-content").value; 
    var longitud = cadena.length; 

        if(longitud <= max) { 
             document.getElementById("contador").value = max-longitud; 
        } else { 
             document.getElementById("new-twt-content").value = cadena.substr(0, max);
        } 
};

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
    timeLine.insertBefore(newTwt, timeLine.children[0]);
};

var disabledBtn = document.getElementById("twt-btn").disabled = true;

function enableBtn() {
   var blueBtn = document.getElementById("twt-btn").removeAttribute("disabled");  
}

