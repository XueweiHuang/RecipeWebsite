import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Test recipe', 'this is a test', 'https://matchasource.com/wp-content/uploads/2015/10/matchamor30_3MOR30-1.jpg') ,
    new Recipe('Test recipe', 'this is a test', 'https://matchasource.com/wp-content/uploads/2015/10/matchamor30_3MOR30-1.jpg') 

  ];

  constructor() { }

  ngOnInit() {
  }

}
