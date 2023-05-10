import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  @ViewChildren('menuLink') menuLinks!: QueryList<any>;

  ngAfterViewInit() {}

}

