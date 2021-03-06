import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) =>
      expense.date.getFullYear().toString() === filteredYear
  );

// const filteredExpenses = props.items.filter((expense) =>
//       {
//         console.log("hi")
//         //found out that you must return then have the ( on same line otherwise u get an error.
//         return (
//           expense.date.getFullYear().toString() === filteredYear
//         )
//       }
//   )
  let expensesContent = <p>No Expenses</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = 
      filteredExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }

  return (
    <div>
      <h3>stage test</h3>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {
          //below in comments are two methods that also work
        }
        {
        /*filteredExpenses.length === 0 && <p>No expenses found.</p>
          filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))*/
        }
        {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> : 
          filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
