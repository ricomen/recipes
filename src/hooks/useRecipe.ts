import { create } from "zustand";
import { schemaRecipe } from "../types/Recipe";
import { ZodError } from "zod";


type ResipeStore = {
    recipe: object,
    isLoading: boolean,
    isError: boolean,
    fetch: (id: number) => void,
}

export const useRecipe = create<ResipeStore>((set) => ({
    recipe: {},
    isLoading: false,
    isError: false,
    fetch: async (id) => {
        try {
            set({isLoading: true})
            const response = await fetch(`https://dummyjson.com/recipes/${id}`).then(async res => {
                return res
            })
            const result = await response.json();

            set({recipe: schemaRecipe.parse(result)})
            set({isLoading: false})

        } catch (error) {
            if (error instanceof ZodError) {
                console.log("Ошибка валидации", error)
            }
            set({isError: true})
            set({isLoading: false})
        }
    }
}))