import { z } from "zod";

export const schemaRecipe = z.object({
    id: z.number(),
    name: z.string(),
    ingredients: z.string().array(),
    instructions: z.string().array(),
    prepTimeMinutes: z.number(),
    cookTimeMinutes: z.number(),
    servings: z.number(),
    difficulty: z.string(),
    cuisine: z.string(),
    caloriesPerServing: z.number(),
    tags: z.string().array(),
    userId: z.number(),
    image: z.string(),
    rating: z.number(),
    reviewCount: z.number(),
    mealType: z.string().array(),
});

export type Recipe = z.infer<typeof schemaRecipe>;

export const schemaRecipes = z.object({
    limit: z.number(),
    recipes: z.array(schemaRecipe),
    skip: z.number(),
    total: z.number()
})


export type Recipes = z.infer<typeof schemaRecipe>;