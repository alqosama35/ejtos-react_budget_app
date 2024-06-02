
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import sign from '../sign.png'


const ExpenseItem = (props) => {
    console.log(sign)
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const deexpense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: deexpense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        
        <td><img src="../sign.png" onClick={event=> increaseAllocation(props.name)} alt="plus"  width={50} /></td>
        <td><img src="../remove.png" onClick={event=> decreaseAllocation(props.name)} alt="decrease"  width={50} /></td>
        
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
        
        
    );
};

export default ExpenseItem;