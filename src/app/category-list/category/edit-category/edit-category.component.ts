import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../CategoryModel';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  private id;
  private category: CategoryModel;

  icons = ['restaurant', 'wc', 'group', 'domain', 'drive_eta', 'event_note', 'enhanced_encryption', 'beach_access',
  'business_center', 'casino', 'fitness_center', 'free_breakfast', 'kitchen', 'spa', 'train', 'local_bar', 'fastfood', 'local_mall',
  'shopping_cart'];

  constructor(private service: CategoryService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (this.isNew()) {
      this.category = new CategoryModel();
      this.category.icon = 'restaurant';
    } else {
      this.service.get(this.id).subscribe((data: CategoryModel) => {
        this.category = data;
      });
    }
  }

  onSave() {
    if (this.isNew()) {
      this.service.create(this.category);
    } else {
      this.service.update(this.category);
    }
  }

  isNew() {
    return this.id === 'new';
  }
}
