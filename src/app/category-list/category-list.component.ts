import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../Models/CategoryModel';
import {UserCategoryService} from '../services/user-category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: CategoryModel[];

  constructor(private service: UserCategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.service.getAll().subscribe((data: CategoryModel[]) => this.categories = data);
  }

  onDelete(category: CategoryModel) {
    let indexCategory = this.categories.indexOf(category);
    this.categories.splice(indexCategory, 1);
  }
}
