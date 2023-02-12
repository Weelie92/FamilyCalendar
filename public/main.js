// eslint-disable-next-line import/extensions, import/no-named-as-default, import/no-named-as-default-member
import I18nI10n from './modules/i18n_i10n.js';

const translator = new I18nI10n();

document.getElementById('language').addEventListener('change', () => {
  document.getElementById('topSection_Top').innerText = translator.translate('welcome');
});

document.getElementById('topSection_Top').innerText = translator.translate('welcome');

document.getElementById('dasButton').addEventListener('click', async () => {
  const language = translator.getLanguage();

  const joke = await getJoke(language);

  document.getElementById('joke').innerText = joke;
});

async function getJoke(language) {
  try {
    const response = await fetch(`http://localhost:8080/jokes/${language}`);
    const joke = await response.json();
    return joke.joke;
  } catch (error) {
    console.error(error);
  }
}
