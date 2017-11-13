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
        var separator = document.createElement("hr");

        var iconDiv = document.createElement("div");
        var commentIcon = document.createElement("i");
        var rtIcon = document.createElement("i");
        var favIcon = document.createElement("i");

        var favIconFull = document.createElement("i");

        //contenido recuperado del h2 en el html
        var usernameOriginal = document.getElementsByTagName("h2")[0];
        //contenido clonado
        var cln = usernameOriginal.cloneNode(true);
    
        //nodos de texto creados
        var newContent = document.createTextNode(valor);
        var contadorContent = document.createTextNode(getTime);
    
        //clases
        newTwt.className = "new-twt";
        commentIcon.classList.add("fa","fa-comment-o");
        rtIcon.classList.add("fa","fa-retweet");
        favIcon.classList.add("fa","fa-heart-o");

        favIconFull.classList.add("fa","fa-heart");

        //atributos
        dateSpan.setAttribute("id","date-span");
        paragraph.setAttribute("id","paragraph");
        iconDiv.setAttribute("id","icon-div");
    
        //elementos apendizados
        timeLine.insertBefore(separator, timeLine.children[0]);
        timeLine.appendChild(newTwt);
        newTwt.appendChild(cln);
        
        dateSpan.appendChild(contadorContent);
        newTwt.appendChild(newContent);
        newTwt.appendChild(paragraph);
        paragraph.appendChild(newContent);
        newTwt.appendChild(dateSpan);
        newTwt.appendChild(iconDiv);
        iconDiv.appendChild(commentIcon);
        iconDiv.appendChild(rtIcon);
        iconDiv.appendChild(favIcon);
        iconDiv.appendChild(favIconFull);
        favIconFull.style.display = "none"
        timeLine.insertBefore(newTwt, timeLine.children[0]);


        //funciones para dar fav al tweet
        favIcon.addEventListener("click",function() {
            favIcon.style.display = "none";
            favIconFull.style.display = "initial";
        })

        favIconFull.addEventListener("click", function() {
            favIconFull.style.display = "none";
            favIcon.style.display = "initial";
        })
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

