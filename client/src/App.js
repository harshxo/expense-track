import AppBar from "./components/AppBar";
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import TransactionForm from "./components/TransactionForm";


function App() {


  
 const [transactions , setTransactions] = useState([]);


  useEffect(() => {
  fetchTransactions();
  } , []);
  

  async function  fetchTransactions(){
    const res = await fetch("http://localhost:4000/transaction");
    const { data }  = await res.json();
    setTransactions(data);
  }
  
  

  return (
    <div >
      <AppBar/>

     <TransactionForm />

    <br/>
    <section>
      <table>
       <thead>
       <th>Amount</th> 
        <th>Description</th>
        <th>Date</th>
       </thead>
       <tbody>
           {transactions.map((trx) => (   
           <tr key = {trx._id}>
           <td>{trx.amount}</td>
           <td>{trx.description}</td>
           <td>{trx.date}</td> 
 
         </tr>
           ))}
       </tbody>
      </table>
    </section>
    </div>
  );
}

export default App;

