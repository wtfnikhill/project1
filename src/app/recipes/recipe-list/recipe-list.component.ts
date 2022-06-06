import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: recipe[] = [
    new recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
