import AppBar from "./components/AppBar";
import {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import TransactionForm from "./components/TransactionForm";


function App() {

const [ editTransactions , setEditTransactions ] = useState([]);

  useEffect(() => {
  fetchTransactions();
  } , []);
  

  async function  fetchTransactions(){
    const res = await fetch("http://localhost:4000/transaction");
    const { data }  = await res.json();
    setTransactions(data);
  }
  
  
  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }


  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default App;

