import {Component, OnInit} from '@angular/core';
import {MonthCategoryService} from '../../services/month-category.service';
import {Category} from '../../Models/Category';
import {CategoryMonth} from '../../Models/CategoryMonth';
import {ActivatedRoute} from '@angular/router';
import {Month} from '../../Models/Month';

@Component({
  selector: 'app-add-month-categories',
  templateUrl: './add-month-categories.component.html',
  styleUrls: ['./add-month-categories.component.scss']
})
export class AddMonthCategoriesComponent implements OnInit {
  categories: Category[];
  categoriesMonth: CategoryMonth[];
  month: Month;

  constructor(private route: ActivatedRoute, private service: MonthCategoryService) { }

  ngOnInit() {
    this.service.getAvailable().subscribe((data: Category[]) => this.categories = data);
    this.month = new Month(this.route.snapshot.params['monthId']);
  }



  onSave() {

    console.log('save categories for month', this.categories);
  }
}
