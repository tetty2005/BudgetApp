export class Category {
  public id: number;
  public icon: string;
  public name: string;
  public monthBudget: number;
  public popularSumm: number;

  constructor(data = null) {
    if (data) this.set(data);
  }

  set(data) {
    this.id = data.id;
    this.icon = data.icon;
    this.name = data.name;
    this.monthBudget = data.monthBudget;
    this.popularSumm = data.popularSumm;
  }

  get() {
    const {id, ...data} = <any>this;

    return data;
  }
}
