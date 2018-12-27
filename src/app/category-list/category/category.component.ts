import { Component, OnInit, Input } from '@angular/core';
import { CategoryModel } from '../../Models/CategoryModel';
import { EventEmitter, Output } from '@angular/core';
import {UserCategoryService} from '../../services/user-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: CategoryModel;
  @Input() selectable: boolean = false;
  @Output() delete = new EventEmitter();

  private isSelected: boolean = false;

  constructor (private service: UserCategoryService) {
  }

  onDelete () {
    this.service.delete(this.category).subscribe(() => this.delete.emit(this.category));
  }

  onSelect() {
    this.isSelected = !this.isSelected;
  }

  ngOnInit() {
  }

}
