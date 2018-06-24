import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  const category = null;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon(
      'restaurant',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/restaurant.svg'));
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
  }

}
