import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe("Sima", "Maize flour na maji","https://grubbys.africa/wp-content/uploads/2021/08/Ugali-1.jpg"),
    new Recipe("Wali", "Mpunga wa kupaka","https://media.istockphoto.com/photos/rice-in-a-bowl-on-a-white-background-picture-id860931464?k=20&m=860931464&s=612x612&w=0&h=Q5ADqpZbQbVzm3YkNwbyhn023S64em9w08O0xg0b0KE=")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
