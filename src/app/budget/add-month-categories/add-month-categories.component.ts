import {Component, OnInit} from '@angular/core';
import {MonthCategoryService} from '../../services/month-category.service';
import {CategoryModel} from '../../Models/CategoryModel';

@Component({
  selector: 'app-add-month-categories',
  templateUrl: './add-month-categories.component.html',
  styleUrls: ['./add-month-categories.component.scss']
})
export class AddMonthCategoriesComponent implements OnInit {
  categories: CategoryModel[];

  constructor(private service: MonthCategoryService) { }

  ngOnInit() {
    this.service.getAvailable().subscribe((data: CategoryModel[]) => this.categories = data);
  }

  onSave() {
    console.log('save caegories for month');
  }

}
