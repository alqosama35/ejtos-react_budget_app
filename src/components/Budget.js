
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,remaining } = useContext(AppContext);
    
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        
        console.log("--"+totalExpenses)
        if (newBudget >= 20000){
            alert("The value cannot exceed remaining funds  £"+remaining);
        }
        else if (newBudget< totalExpenses){
            alert("you cannot reduce the budget value lower than the spending")
        }
        
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;