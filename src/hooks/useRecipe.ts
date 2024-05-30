import { create } from "zustand"
import { Recipes, RecipeDetail } from "../types/Recipe"

type ResipesStore = {
    recipes: Recipes,
    recipeDetail: {},
    isLoading: boolean,
    isError: boolean,
    bookmarks: number[],
    fetchRecipe: (id: number) => void,
    fetch: () => void,
    addToBookmarks: (id: number) => void,
    removeFromBookmarks: (id: number) => void,
}

const INIT_STATE: Recipes = {
  limit: 0,
  recipes: [],
  skip: 0,
  total: 0
}

export const useRecipe = create<ResipesStore>((set, get) => ({
    recipes: INIT_STATE,
    isLoading: false,
    isError: false,
    recipeDetail: {},
    bookmarks: [],
    fetchRecipe: async (id) => {
        try {
            set({isLoading: true})
            const response = await fetch(`https://dummyjson.com/recipes/${id}`).then(async res => {
                return res
            })
            console.log(`https://dummyjson.com/recipes/${id}`)
            const result = await response.json();

            set({recipeDetail: result})
            set({isLoading: false})

        } catch (error) {
            set({isError: true})
            set({isLoading: false})
        }
    },
    fetch: async () => {
        try {
            set({isLoading: true})
            const response = await fetch('https://dummyjson.com/recipes').then(async res => {
                // await new Promise(resolve => setTimeout(resolve, 5000))
                return res
            })
            const result = await response.json();

            set({recipes: result})
            set({isLoading: false})

        } catch (error) {
            set({isError: true})
            set({isLoading: false})
        }
    },
    addToBookmarks: (id) => {
        if (!get().bookmarks.includes(id)) {
            set( state => ({bookmarks: [...state.bookmarks, id]}))
        }
    },
    removeFromBookmarks: (id) => {
        set((state) => ({ bookmarks: state.bookmarks.filter((bookmark) => bookmark != id)}))
    }
}))