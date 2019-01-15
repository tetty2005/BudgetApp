import {Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import {MonthCategoryService} from '../../services/month-category.service';
import {Category} from '../../Models/Category';
import {MonthCategory} from '../../Models/MonthCategory';
import {ActivatedRoute} from '@angular/router';
import {Month} from '../../Models/Month';
import {CategoryComponent} from '../../category-list/category/category.component';

@Component({
  selector: 'app-add-month-categories',
  templateUrl: './add-month-categories.component.html',
  styleUrls: ['./add-month-categories.component.scss']
})
export class AddMonthCategoriesComponent implements OnInit {
  categories: Category[];
  month: Month;
  @ViewChildren(CategoryComponent) categoryComps: QueryList<CategoryComponent>;

  constructor(private route: ActivatedRoute, private service: MonthCategoryService) { }

  ngOnInit() {
    this.month = new Month(this.route.snapshot.params['monthId']);
    this.service.setMonth(this.month);
    this.service.getAvailable().subscribe((data: Category[]) => this.categories = data);
  }

  onSave() {
    const monthCategories = this.getSelectedCategories().map(category => MonthCategory.fromCategory(category));

    this.service.createMany(monthCategories);
  }

  getSelectedCategories() {
    const categoryCompsSelected = this.categoryComps.filter(comp => comp.isSelected);

    return categoryCompsSelected.map(comp => comp.category);
  }
}
