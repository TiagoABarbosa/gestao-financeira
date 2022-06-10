import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';
import { BASE_URL } from '../../config/requests';
import { useEffect, useState } from 'react';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {

    const [itemValue, setItemValue] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/items`)
            .then(response => {
                const data = response.data as Item;
            });

    }, [itemValue]);

    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'blue'}>
                    R$ {item.value}
                </C.Value>
                <C.Button>
                    <AiOutlineDelete size={18}></AiOutlineDelete>
                </C.Button>
                <C.Button>
                    <AiOutlineEdit size={18}></AiOutlineEdit>
                </C.Button>
            </C.TableColumn>
        </C.TableLine>

    );
};