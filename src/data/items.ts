import { Item } from '../types/Item';

export const ArrayItems: Item[] = [
    { date: new Date(2022, 5, 1), category: 'salary', title: 'Salário Mês', value: 6000.00 },
    { date: new Date(2022, 5, 28), category: 'food', title: 'McDonalds', value: 69.12 },
    { date: new Date(2022, 5, 30), category: 'fuel', title: 'Gasolina', value: 120.00 },
    { date: new Date(2022, 5, 28), category: 'rent', title: 'Aluguel', value: 1200.00 },
    { date: new Date(2022, 6, 15), category: 'salary', title: 'Adiantamento', value: 2400.00 },
    { date: new Date(2022, 6, 10), category: 'varied', title: 'Boletos', value: 400.00 },
    { date: new Date(2022, 5, 1), category: 'salary', title: 'Salário Mês', value: 6000.00 },
    { date: new Date(2022, 5, 28), category: 'food', title: 'McDonalds', value: 69.12 },
    { date: new Date(2022, 5, 30), category: 'fuel', title: 'Gasolina', value: 120.00 },
    { date: new Date(2022, 5, 28), category: 'rent', title: 'Aluguel', value: 1200.00 },
    { date: new Date(2022, 6, 15), category: 'salary', title: 'Adiantamento', value: 2400.00 },
    { date: new Date(2022, 6, 10), category: 'varied', title: 'Boletos', value: 400.00 },
    { date: new Date(2022, 5, 1), category: 'salary', title: 'Salário Mês', value: 6000.00 },
    { date: new Date(2022, 5, 28), category: 'food', title: 'McDonalds', value: 69.12 },
    { date: new Date(2022, 5, 30), category: 'fuel', title: 'Gasolina', value: 120.00 },
    { date: new Date(2022, 5, 28), category: 'rent', title: 'Aluguel', value: 1200.00 },
    { date: new Date(2022, 6, 15), category: 'salary', title: 'Adiantamento', value: 2400.00 },
    { date: new Date(2022, 6, 10), category: 'varied', title: 'Boletos', value: 400.00 },
    { date: new Date(2022, 5, 1), category: 'salary', title: 'Salário Mês', value: 6000.00 },
    { date: new Date(2022, 5, 28), category: 'food', title: 'McDonalds', value: 69.12 },
    { date: new Date(2022, 5, 30), category: 'fuel', title: 'Gasolina', value: 120.00 },
    { date: new Date(2022, 5, 28), category: 'rent', title: 'Aluguel', value: 1200.00 },
    { date: new Date(2022, 6, 15), category: 'salary', title: 'Adiantamento', value: 2400.00 },
    { date: new Date(2022, 6, 10), category: 'varied', title: 'Boletos', value: 400.00 },

];

ArrayItems.sort(function(a,b) { 
    return a.date.getTime() - b.date.getTime() 
});