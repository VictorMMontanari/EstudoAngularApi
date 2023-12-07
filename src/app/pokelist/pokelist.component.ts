import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {
  @Input() pokemon: any;

  ngOnInit(): void {
    console.log(this.pokemon);
  }
}
