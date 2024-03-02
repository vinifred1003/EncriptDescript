var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function criptografar() {
  var word = document.getElementById("text").value;
  var key = parseInt(document.getElementById("key").value);
  var wordWithoutSpace = word.replace(/\s/g, '');

  let criptString = "";
  for (let i = 0; i < wordWithoutSpace.length; i++) {
    let char = wordWithoutSpace[i];
    let isUpperCase = char === char.toUpperCase();
    char = char.toLowerCase();

    if (alfabeto.includes(char)) {
      let index = (alfabeto.indexOf(char) + key) % alfabeto.length;
      if (index < 0) {
        index += alfabeto.length;
      }
      let encryptedChar = alfabeto[index];
      criptString += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
    } else {
      criptString += char;
    }
  }

  var textareaElement = document.getElementById("resultado");
  textareaElement.value = criptString;
}

function descriptografar() {
  var word = document.getElementById("resultado").value; // Utiliza o resultado criptografado
  var key = parseInt(document.getElementById("key").value);
  var wordWithoutSpace = word.replace(/\s/g, '');

  let decryptString = "";
  for (let i = 0; i < wordWithoutSpace.length; i++) {
    let char = wordWithoutSpace[i];
    let isUpperCase = char === char.toUpperCase();
    char = char.toLowerCase();

    if (alfabeto.includes(char)) {
      let index = (alfabeto.indexOf(char) - key) % alfabeto.length;
      if (index < 0) {
        index += alfabeto.length;
      }
      let decryptedChar = alfabeto[index];
      decryptString += isUpperCase ? decryptedChar.toUpperCase() : decryptedChar;
    } else {
      decryptString += char;
    }
  }

  var textareaElement = document.getElementById("text"); // Mostra o texto descriptografado no campo original
  textareaElement.value = decryptString;
}
