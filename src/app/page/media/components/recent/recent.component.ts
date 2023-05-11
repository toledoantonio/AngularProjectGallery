import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {
  title = "Recent";
  a=3;

  constructor() { }

  ngOnInit(): void {
  }

}
