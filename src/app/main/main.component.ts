import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'list',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/list.svg'));

    iconRegistry.addSvgIcon(
      'list_add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/list_add.svg'));

    iconRegistry.addSvgIcon(
      'pie_chart',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/pie_chart.svg'));

    iconRegistry.addSvgIcon(
      'bar_chart',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/bar_chart.svg'));

    iconRegistry.addSvgIcon(
      'money-bag2',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/money-bag2.svg'));
  }

  ngOnInit() {
  }

}
