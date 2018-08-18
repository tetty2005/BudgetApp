import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'more-vert',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/more-vert.svg'));

    iconRegistry.addSvgIcon(
      'more-horiz',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/more-horiz.svg'));
  }

  ngOnInit() {
  }

}
