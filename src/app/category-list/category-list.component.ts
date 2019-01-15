import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/Category';
import {UserCategoryService} from '../services/user-category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private service: UserCategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.service.getAll().subscribe((data: Category[]) => this.categories = data);
  }

  onDelete(category: Category) {
    const index = this.categories.indexOf(category);

    this.categories.splice(index, 1);
  }
}
