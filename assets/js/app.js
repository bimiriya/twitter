//función para contar caracteres en reversa 
//y cambiar el color del contador
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

//función para agrandar el height del textarea
var textarea = document.getElementById("new-twt-content");

textarea.oninput = function() {
  textarea.style.height = textarea.scrollHeight + "px";
};

//función para imprimir tweet en el timeline
function add() {
    var twtNewContent = document.getElementById("new-twt-content");
    var twtBtn = document.getElementById("twt-btn");
    var timeLine = document.getElementById("timeline");
    
    var newTwt = document.createElement("div");
    var newContent = document.createElement("p");
    var dateSpan = document.createElement("span");
    var getHours = new Date().getHours();
    var getMinutes = new Date().getMinutes();
    var getTime = getHours + ":" + getMinutes;

    newTwt.className = "new-twt";

    timeLine.appendChild(newTwt)
    newTwt.appendChild(newContent);
    newTwt.appendChild(dateSpan);
    dateSpan.textContent = getTime;
    newContent.textContent = twtNewContent.value;
    timeLine.insertBefore(newTwt, timeLine.children[0]);
};