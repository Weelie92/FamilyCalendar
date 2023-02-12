import express from 'express';

const server = new express();
const port = 8080;

server.set('port', port);
server.use(express.static('public'));

server.get('/', (req, res) => {
  res.status(200).send('Hello World').end();
});

server.listen(server.get('port'), () => {
  console.log('server running', server.get('port'));
});

server.get('/jokes/:language', (req, res) => {
  const selectedLanguage = req.params.language;

  const languageJokes = jokes[selectedLanguage];

  if (!languageJokes) {
    return res.status(400).send({ error: 'Invalid language code' });
  }

  const randomIndex = Math.floor(Math.random() * Object.keys(languageJokes).length);

  const joke = languageJokes[randomIndex].joke;

  res.send({ joke });
});

const jokes = {
  en: [
    { joke: 'Why did the tomato turn red? Because it saw the salad dressing!' },
    { joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
  ],
  fr: [
    { joke: 'Pourquoi le poulet a-t-il traversé la rue? Pour aller chez le coiffeur.' },
    { joke: 'Pourquoi les plongeurs plongent-ils dans la mer? Pour aller au fond des choses.' },
  ],
  no: [
    { joke: 'Hvorfor stod melken på kjøkkenbenken? Fordi den ikke klarte å gå tilbake til kjøleskapet.' },
    { joke: 'Hva sa den ene sokken til den andre? Jeg føler meg litt stram i dag.' },
  ],
  de: [
    { joke: 'Warum war der Mathematikbuch traurig? Weil es zu viele Probleme hatte.' },
    { joke: 'Warum war der Gürtel so optimistisch? Weil er endlich einen Job hatte, um seine Hose zu halten.' },
  ],
  es: [
    { joke: '¿Por qué los pájaros vuelan hacia el sur para el invierno? Porque es demasiado lejos para caminar.' },
    { joke: '¿Por qué los pescadores aman el mar? Porque es un gran lugar para relajarse y hacer un poco de pesas.' },
  ],
};
