import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/Rx'


@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService){}

  storeRecipes(){
    // console.log("getRecipes:");
    // console.log(this.recipeService.getRecipes);
    return this.http.put('https://ng-recipe-book-88c25.firebaseio.com/recipes.json',
                  this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-88c25.firebaseio.com/recipes.json')
            .map(
              (response: Response) => {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                  if(!recipe['ingredients']){
                    console.log(recipe);
                    recipe['ingredients'] = [];
                  }
                }
                return recipes;
              }
            )
            .subscribe(
              (recipes: Recipe[]) => {
                // const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
              }
            );
  }
}
