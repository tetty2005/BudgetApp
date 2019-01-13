import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MonthCategory} from '../../Models/MonthCategory';
import {MonthCategoryService} from '../../services/month-category.service';
import {Spending} from '../../Models/Spending';

@Component({
  selector: 'app-category-budget',
  templateUrl: './category-budget.component.html',
  styleUrls: ['./category-budget.component.scss']
})
export class CategoryBudgetComponent implements OnInit {
  @Input() monthCategory: MonthCategory;
  @Output() delete = new EventEmitter();
  enteredSum: number;

  constructor(private service: MonthCategoryService) {
  }

  get progressClass() {
    const progressValue = this.monthCategory.spendingSum / this.monthCategory.monthBudget * 100;

    return 'styled' + Math.min(Math.floor(progressValue / 10), 10);
  }

  onDelete() {
    this.service.delete(this.monthCategory).subscribe(() => this.delete.emit(this.monthCategory));
  }

  onPopularSum() {
    this.addSpending(this.monthCategory.popularSum);
  }

  onSumEnter() {
    if (this.enteredSum) {
      this.addSpending(this.enteredSum);
      this.enteredSum = null;
    }
  }

  addSpending(sum: number) {
    this.monthCategory.addSpending(new Spending({sum}));
    this.service.update(this.monthCategory);
  }

  ngOnInit() {
  }

}
