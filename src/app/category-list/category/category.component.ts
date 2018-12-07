import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from '../../CategoryModel';
import { CategoryService } from '../../services/category.service';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: CategoryModel;
  @Output() delete = new EventEmitter();

  constructor (private service: CategoryService) {
  }

  onEdit () {
    console.log('onEdit');
  }

  onDelete () {
    this.service.delete(this.category).then(() => this.delete.emit(this.category));
  }

  ngOnInit() {
  }

}
