import {Category} from './Category';
import {Spending} from './Spending';

export class CategoryMonth extends Category {
  public id: number;
  public icon: string;
  public name: string;
  public monthBudget: number;
  public popularSumm: number;
  public spendings: Spending[];
  public spendingSumm: number;
  public restBudget: number;

  constructor(data = null) {
    super();
  }

  set(data) {
    this.id = data.id;
    this.icon = data.icon;
    this.name = data.name;
    this.monthBudget = data.monthBudget;
    this.popularSumm = data.popularSumm;
    this.spendings = data.spendings;
    this.spendingSumm = data.spendingSumm;
    this.restBudget = data.restBudget;
  }
}
