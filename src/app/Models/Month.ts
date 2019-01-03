export class Month {
  private date: Date;

  constructor(id = null) {
    if (id) {
      this.date = new Date(id + '-01');
    } else {
      this.date = new Date();
    }
  }

  get id() {
    return this.date.getFullYear() + '-' + ('0' + (this.date.getMonth() + 1)).substr(-2);
  }

  toString() {
    return Month.capitalizeFirstLetter(this.date.toLocaleDateString('ru', {month: 'long'})) + ' ' + this.date.getFullYear();
  }

  static capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
