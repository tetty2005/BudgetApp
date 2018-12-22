import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../Models/CategoryModel';
import { UserCategoryService } from '../services/user-category.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})

export class BudgetComponent implements OnInit {
  categories: CategoryModel[];

  constructor(private service: UserCategoryService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data: CategoryModel[]) => this.categories = data);
  }

  getCategories() {
    console.log('getCategories', this.categories);
  }
}
