import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('RAW ORANGE AND BLUEBERRY "CHEESECAKE"',
      'One Green Planet',
      'https://i2.wp.com/www.onegreenplanet.org/wp-content/uploads/2012/11/Raw-Orange-and-Blueberry-Cheesecake.jpg?fit=600%2C400&ssl=1',
      [
        new Ingredient('cups raw nuts', 2),
        new Ingredient('cup dates or raisins', 1)
      ]),
      new Recipe('Raw Summer Superfood Cake',
        'Be Good Organics',
        'https://cdn.shopify.com/s/files/1/0213/3874/files/IMG_2512_2048x2048.JPG?7403',
        [
          new Ingredient('brazil nuts', 1.5),
          new Ingredient('sunflower seeds', 1)
        ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
