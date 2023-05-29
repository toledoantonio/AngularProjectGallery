import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1W',
  templateUrl: './project1W.component.html',
  styleUrls: ['./project1W.component.scss']
})
export class Project1WComponent implements OnInit {
  title = "project1W";

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
