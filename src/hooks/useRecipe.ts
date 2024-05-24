import { create } from "zustand"
import { Recipe, Recipes } from "../types/Recipe"

type BearsStore = {
    recipes: Recipes,
    isLoading: boolean,
    isError: boolean,
    bookmarks: number[],
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

export const useRecipe = create<BearsStore>((set, get) => ({
    recipes: INIT_STATE,
    isLoading: false,
    isError: false,
    bookmarks: [],
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