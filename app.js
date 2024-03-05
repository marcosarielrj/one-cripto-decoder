let texto ="";
let resultado;

function criptografar(){
    
    texto = document.querySelector('textarea').value;

    resultado = texto.replace(/a|e|i|o|u/g, match => {
        switch (match.toLowerCase()) {
            
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
  }
  
});
    
    
    document.querySelector('h2').innerHTML = resultado;
    document.querySelector('p').innerHTML = "";
    document.getElementById('img-saida').src = "";
    document.getElementById('copiar').style.display = "block";

}

function descriptografar(){
    
    texto = document.querySelector('textarea').value;

    resultado = texto.replace(/ai|enter|imes|ober|ufat/g, match => {
        switch (match.toLowerCase()) {
            
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";
  }
  

});


    document.querySelector('h2').innerHTML = resultado;
    document.querySelector('p').innerHTML = "";
    document.getElementById('img-saida').src = "";
    document.getElementById('copiar').style.display = "block";
    
}    
