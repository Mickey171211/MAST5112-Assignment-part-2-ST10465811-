import React, { createContext, useState, ReactNode } from 'react';

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  course: 'Starter' | 'Main' | 'Dessert' | string;
  price: number; // store as number internally
};

type MenuContextType = {
  items: MenuItem[];
  addItem: (item: Omit<MenuItem, 'id'>) => void;
  updateItem: (id: string, data: Partial<Omit<MenuItem, 'id'>>) => void;
  deleteItem: (id: string) => void;
  averageByCourse: () => Record<string, number>;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<MenuItem[]>([]);

  const addItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = { id: Date.now().toString(), ...item };
    setItems(prev => [newItem, ...prev]);
  };

  const updateItem = (id: string, data: Partial<Omit<MenuItem, 'id'>>) => {
    setItems(prev => prev.map(i => (i.id === id ? { ...i, ...data } : i)));
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const averageByCourse = () => {
    const totals: Record<string, { sum: number; count: number }> = {};
    items.forEach(i => {
      const c = i.course || 'Other';
      totals[c] = totals[c] || { sum: 0, count: 0 };
      totals[c].sum += i.price;
      totals[c].count += 1;
    });
    const averages: Record<string, number> = {};
    Object.keys(totals).forEach(k => {
      averages[k] = totals[k].count ? totals[k].sum / totals[k].count : 0;
    });
    return averages;
  };

  return (
    <MenuContext.Provider value={{ items, addItem, updateItem, deleteItem, averageByCourse }}>
      {children}
    </MenuContext.Provider>
  );
};