class Event {
  constructor(title, description, date, time, members, location) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
    this.members = members;
    this.location = location;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDate() {
    return this.date;
  }

  getTime() {
    return this.time;
  }

  getMembers() {
    return this.members;
  }

  getLocation() {
    return this.location;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDate(date) {
    this.date = date;
  }

  setTime(time) {
    this.time = time;
  }

  setMembers(members) {
    this.members = members;
  }

  setLocation(location) {
    this.location = location;
  }
}

export { Event };
