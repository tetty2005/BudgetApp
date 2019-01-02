import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../Models/Category';

@Component({
  selector: 'app-category-budget',
  templateUrl: './category-budget.component.html',
  styleUrls: ['./category-budget.component.scss']
})
export class CategoryBudgetComponent implements OnInit {
  @Input() category: Category;
  constructor() { }

  onEdit () {
    console.log('onEdit');
  }

  onDelete () {
    console.log('onDelete');
  }

  onShortSum () {
    console.log('onShortSum');
  }

  ngOnInit() {
  }

}
