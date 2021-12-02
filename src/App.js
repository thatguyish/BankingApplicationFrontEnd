import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AccountComponent from './components/AccountComponent';
import ListCustomerComponent from "./components/ListCustomersComponent";
import CreateCustomerComponent from "./components/CreateCustomerComponent";
import DepositsComponent from "./components/DepositsComponent";
import DisplayAccounts from './components/DisplayAccounts';
import AddBillComponent from './components/AddBillComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <main>
      <HeaderComponent/>
    
      <FooterComponent/>
      </main>
      <div className="container">
        
        <Routes>

          <Route path='/' element = {<DisplayAccounts />} />  
          <Route path="/deposits" element={<DepositsComponent />} />
          <Route path='/accounts' element = {<AccountComponent/>} />
          <Route path="/customers" element={<ListCustomerComponent />} />
          <Route path="/add-bill" element={<AddBillComponent />} />
          <Route path="/list-customers" element={<ListCustomerComponent />} />
          <Route path="/create-customer" element={<CreateCustomerComponent />} />
          <Route path="/edit-customer/:id" element={<CreateCustomerComponent />} />

        </Routes>
       
      </div>

    </div>
    
  );
}

export default App;