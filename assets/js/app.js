function contar() { 
    var max = "140"; 
    var cadena = document.getElementById("new-twt-content").value; 
    var longitud = cadena.length; 

        if(longitud <= max) { 
             document.getElementById("contador").value = max-longitud; 
        } else if (longitud > 0) { //cuando el contador llegue a 0 (puesto que empieza en 140 hacia atrás)
            document.getElementById("contador").value = "-" + (longitud - max); //agregará un - más la longitud del texto a la cual se le restan los 140 caracteres
            document.getElementById("twt-btn").disabled = true;
        };

       if (longitud > 130) {
            document.getElementById("contador").style.color = "red";
        } else if (longitud > 120) {
            document.getElementById("contador").style.color = "orange";
        }

};


function add() {
    var twtNewContent = document.getElementById("new-twt-content");
    var twtBtn = document.getElementById("twt-btn");
    var timeLine = document.getElementById("timeline");
    
    var newTwt = document.createElement("div");
    var newContent = document.createElement("p");
    var dateSpan = document.createElement("span");
    var getHours = new Date().getHours();
    var getMinutes = new Date().getMinutes();
    var getDate = getHours + ":" + getMinutes;

    newTwt.className = "new-twt";
    
    timeLine.appendChild(newTwt)
    newTwt.appendChild(newContent);
    newTwt.appendChild(dateSpan);
    dateSpan.textContent = getDate;
    newContent.textContent = twtNewContent.value;
    timeLine.insertBefore(newTwt, timeLine.children[0]);
};

//var disabledBtn = document.getElementById("twt-btn").disabled = true;

//function enableBtn() {
  // var blueBtn = document.getElementById("twt-btn").removeAttribute("disabled");  
//}

