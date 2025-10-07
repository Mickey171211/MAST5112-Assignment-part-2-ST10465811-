import React, { createContext, useState, ReactNode } from 'react';

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  course: string;
  price: string; // stored as string to display like '12.50'
};

type MenuContextType = {
  items: MenuItem[];
  addItem: (item: Omit<MenuItem, 'id'>) => void;
  updateItem: (id: string, data: Partial<MenuItem>) => void;
  deleteItem: (id: string) => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<MenuItem[]>([]);

  const addItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = { id: Date.now().toString(), ...item };
    setItems(prev => [newItem, ...prev]);
  };

  const updateItem = (id: string, data: Partial<MenuItem>) => {
    setItems(prev => prev.map(i => (i.id === id ? { ...i, ...data } : i)));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <MenuContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </MenuContext.Provider>
  );
};
