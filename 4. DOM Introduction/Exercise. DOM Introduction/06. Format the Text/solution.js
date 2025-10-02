function solve() {
  let text = document.getElementById('input').value;
  let outputRef = document.getElementById('output');
  outputRef.innerHTML = '';

  let sentencesArr = text.split('.').filter(s => s.length > 0).map(s => s.trim());

  for (let i = 0; i < sentencesArr.length; i+=3) {
    let paragraphSentences = sentencesArr.slice(i, i + 3);
    let paragraphText = paragraphSentences.join('.');
    let paragraphElement = `<p>${paragraphText}.</p>`;
    outputRef.innerHTML += paragraphElement;
  }
}