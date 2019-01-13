import { Component, OnInit } from '@angular/core';
import { Month } from '../Models/Month';
import {MonthCategoryService} from '../services/month-category.service';
import {MonthCategory} from '../Models/MonthCategory';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})

export class BudgetComponent implements OnInit {
  monthCategories: MonthCategory[];
  month: Month = new Month();

  constructor(private service: MonthCategoryService) { }

  ngOnInit() {
    this.service.setMonth(this.month);
    this.service.getAll().subscribe((data: MonthCategory[]) => this.monthCategories = data);
  }

  onDelete(monthCategory: MonthCategory) {
    const index = this.monthCategories.indexOf(monthCategory);

    this.monthCategories.splice(index, 1);
  }
}
