const RemoteRepository = {
  getRandomFact() {
    return fetch("https://uselessfacts.jsph.pl/random.json?language=en").then(
      (response) => response.json()
    );
  },
};
