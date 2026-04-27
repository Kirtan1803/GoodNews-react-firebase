import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware'
export let useAdminStore = create(persist(
    immer((set) => ({
        admin: {},
        isadmin: false,

        login: (admin) => set(
            (state) => {
                state.admin = admin
                state.isadmin = true
            }
        ),

        logout : () => set(
            (state) => {
                state.admin = {}
                state.isadmin = false
            }
        )

    }),
    ),

    {
        name: 'adminstore',
        storage:createJSONStorage(()=>sessionStorage),
    })
)