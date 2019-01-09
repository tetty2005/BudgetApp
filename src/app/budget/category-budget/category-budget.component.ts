import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MonthCategory} from '../../Models/MonthCategory';
import {MonthCategoryService} from '../../services/month-category.service';

@Component({
  selector: 'app-category-budget',
  templateUrl: './category-budget.component.html',
  styleUrls: ['./category-budget.component.scss']
})
export class CategoryBudgetComponent implements OnInit {
  @Input() monthCategory: MonthCategory;
  @Output() delete = new EventEmitter();
  enteredSum: number;
  constructor(private service: MonthCategoryService) { }

  onEdit() {
    console.log('onEdit');
  }

  onDelete() {
    this.service.delete(this.monthCategory).subscribe(() => this.delete.emit(this.monthCategory));
  }

  onShortSum() {
    console.log('onShortSum: add', this.monthCategory.popularSum);
  }

  onSumEnter() {
    if (this.enteredSum) {
      console.log('onSumEnter: add', this.enteredSum);
      this.enteredSum = null;
    }
  }

  ngOnInit() {
  }

}
