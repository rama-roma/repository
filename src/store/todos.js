import { create } from "zustand";

let api = "https://6938e1f54618a71d77d1839c.mockapi.io/users";

export const useTodos = create((set, get) => ({
  data: [],
  dataById: null,

  getUser: async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();   
      set(() => ({ data }));    
    } 
    catch (error) {
      console.log(error);
    }
  },

  getById: async (id) => {
    try {
      const response = await fetch(`${api}/${id}`);
      const user = await response.json();   
      set(() => ({ dataById: user }));    
    } 
    catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (id) => {
    try {
      await fetch(`${api}/${id}`, {
        method: "DELETE"
      });
      get().getUser();
    } 
    catch (error) {
        console.log(error);
    }
  },

  editUser: async (user) => {
    try {
      await fetch(`${api}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            name: user.name,
            description: user.description,
            status: user.status
        })
      });
      get().getUser();    
    } 
    catch (error) {
        console.log(error);
    }
  },

  addUser: async (user) => {
    try {
       await fetch(api, {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            name: user.name,
            description: user.description,
            status: user.status,
            avatar: user.avatar
        })
       });
       get().getUser();    
    } 
    catch (error) {
        console.log(error);
    }
  },

  checkedbox: async (id) => {
    try {
      const user = get().data.find(u => u.id === id);

      await fetch(`${api}/${id}`, {
        method: "PUT",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({
            ...user,
            status: !user.status
        })
      });
      get().getUser();    
    } 
    catch (error) {
        console.log(error);
    }
  } 

}));
