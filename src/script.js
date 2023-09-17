var name;
var pronoun;

function setIdentity(){
    name = document.getElementById("name").value;
    var pronoun_options = document.getElementsByName('pronoun');
    for (i = 0; i < pronoun_options.length; i++) {
        if (pronoun_options[i].checked){
            pronoun = pronoun_options[i].value;
        }
    }
    

}
