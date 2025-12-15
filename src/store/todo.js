import { create } from "zustand";

export const useTodo = create((set) => ({
    data: [
        {
            id: 1,
            name: "Ramziya",
            status: false
        },
        {
            id: 2,
            name: "Rohila",
            status: true
        },
        {
            id: 3,
            name: "Mijgona",
            status: false
        },
        {
            id: 4,
            name: "Sabrina",
            status: true
        }
    ],
    deleteUser: (id) => set((state) => ({
        data: state.data.filter((e) => e.id !== id)
    })),
    addUser: (name, status) => set((state) => ({
    data: [
        ...state.data,
        {
            id: Date.now(),
            name,
            status
        }
    ]
    })),
    editUser: (id, name, status) => set((state) => ({
        data: state.data.map((user) => user.id === id ?  {...user, name, status} : user)
    })),
    
}))