import { useState, useEffect } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { ArrayItems } from "../../data/items";
import { getCurrentMonth, filterListByMonth } from "../../helpers/dateFilter";
import { TableArea } from "../../components/TableArea";
import { InfoArea } from "../../components/InfoArea";
import { InputArea } from "../../components/InputArea";
import { AiOutlineLogout } from "react-icons/ai";
import { ScrollToTop } from "../../components/Topo";
import Footer from "../../components/Footer";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const [list, setList] = useState(ArrayItems);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  //LOGOUT
  const { signout }: any = useAuth();
  async function handleLogout() {
    signout();
  }
  
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
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <>
      <C.Container>
        <C.Header>
          <C.Button>
            <AiOutlineLogout
              size={22}
              title="Logout"
              onClick={handleLogout}
            ></AiOutlineLogout>
          </C.Button>
          <C.HeaderText>Gestão Financeira</C.HeaderText>
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
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
