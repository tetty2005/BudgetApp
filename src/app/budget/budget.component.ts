import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/Category';
import { UserCategoryService } from '../services/user-category.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})

export class BudgetComponent implements OnInit {
  categories: Category[];

  constructor(private service: UserCategoryService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data: Category[]) => this.categories = data);
  }

  getCategories() {
    console.log('getCategories', this.categories);
  }
}
