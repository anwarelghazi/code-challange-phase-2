import React, { useState } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  
  function handleSubmit(e) {
    fetch("https://bank-of-flatiron-code-challenge-3.onrender.com/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });
     alert("added successfully")
  }
  return (
    <div className="falcon">
      <form onSubmit={handleSubmit} className="">
        <div className="transaction">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="my-button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;