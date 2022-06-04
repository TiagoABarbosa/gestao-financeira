import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: 'red', expense: true },
    fuel: { title: 'Combustível', color: 'orange', expense: true },
    rent: { title: 'Aluguel', color: '#0077d2', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    varied: { title: 'Diversos', color: 'silver', expense: false }
}