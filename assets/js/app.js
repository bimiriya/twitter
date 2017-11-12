//elementos recuperados del html
var textarea = document.getElementById("new-twt-content");
var twtBtn = document.getElementById("twt-btn");
var timeInput = document.getElementById("contador");
var timeLine = document.getElementById("timeline");

//función para agrandar el height del textarea
textarea.oninput = function() {
  textarea.style.height = textarea.scrollHeight + "px";
};

//función para crear nuevo tweet con el valor del textarea
twtBtn.onclick = function() {
    //solo funciona si el textarea NO está vacío
    if (textarea.value != "") {
        //valor recuperado del textarea
        var valor = textarea.value;
        //valor limpio para un nuevo tweet
        textarea.value = "";
    
        //elementos creados
        var newTwt = document.createElement("div");
        var paragraph = document.createElement("p");
        var dateSpan = document.createElement("span");
        var getHours = new Date().getHours();
        var getMinutes = new Date().getMinutes();
        var getTime = getHours + ":" + getMinutes;
    
        //nodos de texto creados
        var newContent = document.createTextNode(valor);
        var contadorContent = document.createTextNode(getTime);
    
        //atributos
        newTwt.className = "new-twt";
    
        //elementos apendizados
        timeLine.appendChild(newTwt)
        newTwt.appendChild(newContent);
        newTwt.appendChild(paragraph);
        paragraph.appendChild(newContent);
        newTwt.appendChild(dateSpan);
        dateSpan.appendChild(contadorContent);
        timeLine.insertBefore(newTwt, timeLine.children[0]);
    }
};

//función para contar caracteres en reversa
//y deshabilitar botón según cantidad caracteres
textarea.onkeydown = function() {
    var max = 139;
    var valor = textarea.value;
    var longitud = valor.length;
    //iniciar contador en reversa
    if (longitud <= max) {
        timeInput.value = max - longitud;
    //contar en numeros negativos
    } else if (longitud > 0) {
        timeInput.value = 0 - (longitud - max);
    }

    //cambiar color contador cuando queden 20 caracteres
    if (longitud >= 119 && longitud <= 128) {
        timeInput.style.color = "orange";
     //cambiar color contador cuando queden 10 caracteres
    } else if (longitud > 128) {
        timeInput.style.color = "red";
    //color default del contador
    } else {
        timeInput.style.color = "black";
    }

    //colorear botón cuando se ingrese min 1 caracter
    if (longitud <= max) {
        twtBtn.style.backgroundColor = "rgb(102, 204, 218)";
        twtBtn.style.color = "white";
    //deshabilitar cuando el contador en reversa llegue a 0
    } else if (longitud > 0) {
        twtBtn.disabled = true;
        twtBtn.style.backgroundColor = "#dcdcdc"
        twtBtn.style.color = "grey";
    }
};

//DOESNT WORK
/*
var c = textarea.value[0];
textarea.addEventListener("keydown", function(c) {
    if (event.keyCode == 8) {
        console.log("funciona");
    }
});
*/