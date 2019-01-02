import {Component, OnInit} from '@angular/core';
import {MonthCategoryService} from '../../services/month-category.service';
import {Category} from '../../Models/Category';
import {CategoryMonth} from '../../Models/CategoryMonth';

@Component({
  selector: 'app-add-month-categories',
  templateUrl: './add-month-categories.component.html',
  styleUrls: ['./add-month-categories.component.scss']
})
export class AddMonthCategoriesComponent implements OnInit {
  categories: Category[];
  categoriesMonth: CategoryMonth[];

  constructor(private service: MonthCategoryService) { }

  ngOnInit() {
    this.service.getAvailable().subscribe((data: Category[]) => this.categories = data);
  }

  onSave() {

    console.log('save categories for month', this.categories);
  }
}
