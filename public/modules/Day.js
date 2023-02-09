class Day {
  constructor(date) {
    this.date = date;
    this.month = date.toLocaleString('default', { month: 'long' });
    this.year = date.getFullYear();
    this.day = date.getDate();
  }
}

export { Day };
