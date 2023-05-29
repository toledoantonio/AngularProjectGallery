import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2W',
  templateUrl: './project2W.component.html',
  styleUrls: ['./project2W.component.scss']
})
export class Project2WComponent implements OnInit {
  title = "project2W";

  sections = [
    {
      title: 'Título 1',
      image: 'ruta-de-la-imagen-1',
      description: 'Descripción 1'
    },
    {
      title: 'Título 2',
      image: 'ruta-de-la-imagen-2',
      description: 'Descripción 2'
    },
    {
      title: 'Título 3',
      image: 'ruta-de-la-imagen-3',
      description: 'Descripción 3'
    },
    {
      title: 'Título 4',
      image: 'ruta-de-la-imagen-4',
      description: 'Descripción 4'
    },
    {
      title: 'Título 5',
      image: 'ruta-de-la-imagen-5',
      description: 'Descripción 5'
    },
    {
      title: 'Título 6',
      image: 'ruta-de-la-imagen-6',
      description: 'Descripción 6'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
