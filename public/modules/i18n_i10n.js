class I18nI10n {
  LANGUAGES = {
    en: {
      welcome: 'Welcome to the Family Calendar',
      family: 'Family',
      goodbye: 'Goodbye',
    },
    fr: {
      welcome: 'Bienvenue sur le calendrier familial',
      family: 'Famille',
      goodbye: 'Au revoir',
    },
    no: {
      welcome: 'Velkommen til familiekalenderen',
      family: 'Familie',
      goodbye: 'Farvel',
    },
    de: {
      welcome: 'Willkommen im Familienkalender',
      family: 'Familie',
      goodbye: 'Auf Wiedersehen',
    },
    es: {
      welcome: 'Bienvenido al calendario familiar',
      family: 'Familia',
      goodbye: 'Adiós',
    },
  };

  getLanguage() {
    return document.getElementById('language').value;
  }

  translate(key) {
    return this.LANGUAGES[this.getLanguage()][key];
  }

  localizeDate(date) {
    return date.toLocaleDateString(this.getLanguage());
  }
}

export default I18nI10n;
