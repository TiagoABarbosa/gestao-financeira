import { useState, useEffect } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { ArrayItems } from '../../data/items';
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter';
import { TableArea } from '../../components/TableArea';
import { InfoArea } from '../../components/InfoArea';
import { InputArea } from '../../components/InputArea';
import { getAuth, signOut } from 'firebase/auth';

const Home = () => {
  const [list, setList] = useState(ArrayItems);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
//LOGOUT GOOGLE
  const auth = getAuth();
    
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Gestão Financeira</C.HeaderText>
        <C.Button onClick={() => signOut(auth)}>Deslogar</C.Button>
      </C.Header>
      <C.Body>

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default Home;