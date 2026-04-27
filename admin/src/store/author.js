import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
export let useAuthorStore = create(persist(
    immer((set) => ({
        author: {},
        isauthor: false,

        login: (author) => set(
            (state) => {
                console.log(author)
                state.author = author
                state.isauthor = true
            }
        ),

        logout : () => set(
            (state) => {
                state.author = {}
                state.isauthor = false
            }
        )

    }),
    ),

    {
        name: 'authorstore',
        storage:createJSONStorage(()=>sessionStorage),
    })
)