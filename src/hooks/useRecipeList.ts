import { create } from "zustand"
import { schemaRecipes } from "../types/Recipe"
import { ZodError } from "zod"

type ResipesStore = {
    recipes: object,
    isLoading: boolean,
    isError: boolean,
    bookmarks: number[],
    fetch: () => void,
    addToBookmarks: (id: number) => void,
    removeFromBookmarks: (id: number) => void,
}

export const useRecipeList = create<ResipesStore>((set, get) => ({
    recipes: {},
    isLoading: false,
    isError: false,
    bookmarks: [],
    fetch: async () => {
        try {
            set({isLoading: true})
            const response = await fetch('https://dummyjson.com/recipes').then(async res => {
                return res
            })
            const result = await response.json();

            set({recipes: schemaRecipes.parse(result)})
            set({isLoading: false})

        } catch (error) {
            if (error instanceof ZodError) {
                console.log("Ошибка валидации", error)
            }
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