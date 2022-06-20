window.onload = function () {
  // first we hide our story
  let story = document.getElementById('story');
  story.style.display = 'none';

  // then we set up an event handler for the form submission
  let form = document.querySelector('form');
  form.onsubmit = function (event) {
    let preStory = document.getElementById('preStory');
    preStory.style.display = 'none';
    const person1Input = document
      .getElementById('person1Input')
      .value.toUpperCase();
    const person2Input = document
      .getElementById('person2Input')
      .value.toUpperCase();
    const animalInput = document
      .getElementById('animalInput')
      .value.toUpperCase();
    const exclamationInput = document
      .getElementById('exclamationInput')
      .value.toUpperCase();
    const verbInput = document.getElementById('verbInput').value.toUpperCase();
    const nounInput = document.getElementById('nounInput').value.toUpperCase();
    story.removeAttribute('style');
    event.preventDefault();

    document.querySelector('span#person1a').innerText = person1Input;
    document.querySelector('span#person1b').innerText = person1Input;
    document.querySelector('span#person1c').innerText = person1Input;
    document.querySelector('span#person2a').innerText = person2Input;
    document.querySelector('span#person2b').innerText = person2Input;
    document.querySelector('span#animal').innerText = animalInput;
    document.querySelector('span#verb').innerText = verbInput;
    document.querySelector('span#noun').innerText = nounInput;
    document.querySelector('span#exclamation').innerText = exclamationInput;

    story.removeAttribute('style');

    event.preventDefault();
  };
};
