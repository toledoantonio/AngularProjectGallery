import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allMedia',
  templateUrl: './allMedia.component.html',
  styleUrls: ['./allMedia.component.scss']
})
export class AllMediaComponent implements OnInit {
  title = "All Media"

  constructor() { }

  ngOnInit(): void {
  }

}
