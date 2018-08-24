import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../CategoryModel';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  category = new CategoryModel();
  icons = ['restaurant', 'wc', 'group', 'domain', 'drive_eta', 'event_note', 'enhanced_encryption', 'beach_access',
  'business_center', 'casino', 'fitness_center', 'free_breakfast', 'kitchen', 'spa', 'train', 'local_bar', 'fastfood', 'local_mall',
  'shopping_cart'];

  constructor(private service: CategoryService) {
    this.category.icon = 'restaurant';
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
  }

  onSave() {
    this.service.create(this.category).subscribe((data: CategoryModel[]) => this.categories = data);
  }
}
