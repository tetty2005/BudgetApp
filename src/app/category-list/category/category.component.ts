import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from '../../CategoryModel';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: CategoryModel;

  constructor (private service: CategoryService) {
  }

  onEdit () {
    console.log('onEdit');
  }

  onDelete () {
    console.log('onDelete');
    this.service.delete(this.category).subscribe((data: CategoryModel[]) => this.categories = data);
  }

  ngOnInit() {
  }

}
