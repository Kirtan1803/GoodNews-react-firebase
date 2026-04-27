import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
export let useUserStore = create(persist(
    immer((set) => ({
        user: {},
        isuser: false,

        login: (user) => set(
            (state) => {
                state.user = user
                state.isuser = true

            }
        ),

        logout : () => set(
            (state) => {
                state.user = {}
                state.isuser = false
            }
        )

    }),
    ),
    {
        name: 'userstore',
        storage:createJSONStorage(()=>sessionStorage),
    })
)