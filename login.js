document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem("isLoggedIn") !== "true")         
    {
        const fragment  = window.location.hash.substring(1); // Prende il valore dopo #
        const [parametro1] = fragment.split("|"); // Divide i valori
        const output = document.getElementById("parametro");
        const TOKEN = "123";

        
        if (parametro1 === TOKEN) 
        {
            sessionStorage.setItem("isLoggedIn", "true");   
        }  
        else
        {
           // window.location.href = "login.html"; // Torna alla pagina di login se non autenticato
        }
    }    
});