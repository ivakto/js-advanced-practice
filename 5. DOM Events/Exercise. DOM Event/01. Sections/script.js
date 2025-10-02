function create(words) {
   const contentRef = document.getElementById("content");
   
   if (!contentRef) {
      return;
   }

   for (let word of words) {
      const newDiv = document.createElement('div');
      const newPar = document.createElement('p');
      newPar.textContent = word;
      newPar.style.display = 'none';
      newDiv.appendChild(newPar);

      newDiv.addEventListener('click', function() {
         newPar.style.display = 'block';
      });

      contentRef.appendChild(newDiv);

   }
}