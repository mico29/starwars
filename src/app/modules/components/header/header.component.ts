import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../utils/constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoStarWars: string = Constantes.logoStarWars;

  list = ['films', 'people', 'planets', 'species', 'vehicles', 'starships'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate([`home`]);
  }

  redirigir(opcion:string) {
    this.router.navigate([`${opcion}`]);
  }

}
