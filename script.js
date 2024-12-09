

function getUser() {
    const body = document.getElementById('joke-text');

    fetch('https://v2.jokeapi.dev/joke/Programming')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Joke not found');
        }
        return response.json();
      })
      .then((data) => {
        // If the joke is of type "single", use the joke property
        if (data.type === "single") {
          body.textContent = data.joke;
        } else if (data.type === "twopart") {
          body.innerHTML = `${data.setup} <br> <b>${data.delivery}</b>`;
        }
      })
      .catch((error) => {
        body.textContent = `Error: ${error.message}`;
      });
}
// getUser();
