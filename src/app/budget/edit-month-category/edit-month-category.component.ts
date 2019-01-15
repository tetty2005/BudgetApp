import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MonthCategoryService} from '../../services/month-category.service';
import {MonthCategory} from '../../Models/MonthCategory';

@Component({
  selector: 'app-edit-month-category',
  templateUrl: './edit-month-category.component.html',
  styleUrls: ['./edit-month-category.component.scss']
})
export class EditMonthCategoryComponent implements OnInit {
  private id;
  public monthCategory: MonthCategory;

  constructor(private service: MonthCategoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.service.get(this.id).subscribe((data: MonthCategory) => {
      this.monthCategory = data;
    });
  }

  onSave() {
    this.service.update(this.monthCategory);
  }
}
