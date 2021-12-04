import React, { useState, useEffect } from "react";
import CustomerService from "../services/CustomerService";
import { InputGroup, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";

const DisplayCustomerComponent = () => {
  //function to change the state value
  const [customer, setCustomer] = useState([
    {
      id: "",
      first_Name: "",
      last_Name: "",
    },
  ]);

  const [q, setQ] = useState("");

  //use effect to fetch the data from the server
  useEffect(() => {
    getAllCustomers();
  }, []);

  const getAllCustomers = () => {
    CustomerService.getAllCustomers()
      .then((res) => {
        setCustomer(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <br />
      <h2 className="text-center">Customers</h2>
      <br /> 
      {/* <Link to="/create-customer" className="btn btn-primary mb-2">
        Create Customer
      </Link> */}
    <InputGroup className="mb-3">
    <FormControl
        type="text"
        className="form-control"
        placeholder="Search customers"
        onChange={(e) => {
          setQ(e.target.value);
        }}
        />
     </InputGroup>
      <br /> 
      <table className="table table-bordered table-striped">
        <thead>
          <th>Customer ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {/*eslint-disable-next-line*/}
          {customer.filter((customer) => {
              if (q === "") {
                return customer;
              } else if (customer.first_Name.toLowerCase().includes(q.toLowerCase()) || customer.last_Name.toLowerCase().includes(q.toLowerCase())) {
                return customer;
              }
            })
            .map((customer) => (
              <tr key={customer.id}>
                <td class="bg-success">{customer.id}</td>
                <td class="bg-info">{customer.first_Name}</td>
                <td class="bg-info">{customer.last_Name}</td>
                <td>
                  <Link to={`/update-customer/${customer.id}`} className="btn btn-primary"> Update </Link> 
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayCustomerComponent;
