import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from '../CategoryModel';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: CategoryModel[];

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.service.getAll().subscribe((data: CategoryModel[]) => this.categories = data);
  }
}
