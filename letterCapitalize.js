(function(){

   function capitalizeFirstLetter(word) {
      var firstLetterUnicode = word.charCodeAt(0);
      var capitalizedFirstLetterUnicode = firstLetterUnicode - 32;
      var wordWithoutFirstLetter = word.slice(1);
      var capitilizedWord =
         String.fromCharCode(capitalizedFirstLetterUnicode) +
         wordWithoutFirstLetter;
      return capitilizedWord;
   }

   function letterCapitalize(inputString) {
      var arrayOfWords = inputString.split(" ");
      var capitalizedArrayOfWords = arrayOfWords.map(capitalizeFirstLetter);
      var capitalizedInputString = capitalizedArrayOfWords.join(" ");
      return capitalizedInputString;
   }

   var inputString1 = document.getElementById("Input String 1").textContent;
   document.getElementById("Capitalized String 1").innerHTML = letterCapitalize(inputString1);

   var inputString2 = document.getElementById("Input String 2").textContent;
   document.getElementById("Capitalized String 2").innerHTML = letterCapitalize(inputString2);

})();