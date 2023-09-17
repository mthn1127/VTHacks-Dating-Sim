var pronoun;

function setIdentity(){

    var nameInput = document.getElementById("nameInput");
    for (i = 0; i < pronoun_options.length; i++) {
        if (pronoun_options[i].checked){
            pronoun = pronoun_options[i].value;
        }
    }
    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
    });
    localStorage.setItem("fullName", fullName);
}