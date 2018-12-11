export class CategoryModel {
    public id: number;
    public icon: string;
    public name: string;
    public monthBudget: number;
    public popularSumm: number;
  constructor ( ) {

  }

  constructor (data) {
    this.set(data);
  }

  set(data) {
    this.id = data.id;
    this.icon = data.icon;
    this.name = data.name;
    this.monthBudget = data.monthBudget;
    this.popularSumm = data.popularSumm;
  }
}
