import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2W',
  templateUrl: './project2W.component.html',
  styleUrls: ['./project2W.component.scss']
})
export class Project2WComponent implements OnInit {
  title = "Windriver - Project 2";

  sections = [
    {
      title: 'Título 1',
      image: 'https://lh3.googleusercontent.com/24_0j8bPtaB-RhS_AZG9WvGT3e9L_Co_5wOl6OLAPnl2Z93C2KDc2LIOOqg7J8QgRcObGJIZng=s0',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nis'
    },
    {
      title: 'Título 2',
      image: 'https://images.ctfassets.net/23aumh6u8s0i/2rne3k2iZ3EtRRpLuafLhM/67acd166eb2dcacba5d573863f1b0b06/angular-and-auth0',
      description: 'Descripción 2'
    },
    {
      title: 'Título 3',
      image: 'https://raw.githubusercontent.com/ciglesiasweb/angular-integration-tests-sample/main/docs/images/elements-to-test.png',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nis'
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
