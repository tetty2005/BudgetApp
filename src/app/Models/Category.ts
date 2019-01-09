import {ICategory} from './ICategory';

export class Category implements ICategory {
  public id: string;
  public icon: string;
  public name: string;
  public monthBudget: number;
  public popularSum: number;

  constructor(data = null) {
    if (data) this.set(data);
  }

  set(data) {
    this.id = data.id;
    this.icon = data.icon;
    this.name = data.name;
    this.monthBudget = data.monthBudget;
    this.popularSum = data.popularSum;
  }

  get() {
    const {id, ...data} = <any>this;

    return data;
  }
}
