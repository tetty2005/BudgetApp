import { Component, OnInit } from '@angular/core';
import { CategoryModel } from './CategoryModel';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  category:CategoryModel = {icon: 'dialpad'};
  icons = ['dialpad', 'restaurant', 'voicemail', 'notifications_off'];

  constructor() {

  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
  }

  onSave() {
    console.log('category saved', this.category);
  }
}
