import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const GetAllCustomer = () => {

  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    const response = await axios.get("http://localhost:8080/customers/getCustomer");
    setCustomer(response.data || []);
  };

  const deleteCustomer = async (id) => {
    await axios.delete(`http://localhost:8080/customers/deleteCustomer/${id}`);
    fetchCustomer();
  };

  const updatePaidWeek = async (id, paidWeeks) => {
    const newPaidWeeks = paidWeeks + 1;

    await axios.put(
      `http://localhost:8080/customers/updatePaidWeeks/${id}/${newPaidWeeks}`
    );

    fetchCustomer();
  };

  const decreasePaidWeek = async (id, paidWeeks) => {

    if (paidWeeks === 0) {
      alert("Paid weeks cannot be less than 0");
      return;
    }

    const newPaidWeeks = paidWeeks - 1;

    await axios.put(
      `http://localhost:8080/customers/updatePaidWeeks/${id}/${newPaidWeeks}`
    );

    fetchCustomer();
  };

  return (
    <div className="dashboard-container">

      <h2 className="dashboard-title">Finance Management Dashboard</h2>

      <button 
        className="create-btn"
        onClick={() => navigate("/create")}
      >
        Create Customer
      </button>

      <table className="customer-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Total Amount</th>
            <th>Total Weeks</th>
            <th>Paid Weeks</th>
            <th>Unpaid Weeks</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customer.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.totalAmount}</td>
              <td>{c.totalWeeks}</td>
              <td>{c.paidWeeks}</td>
              <td>{c.unpaidWeeks}</td>

              <td className="action-buttons">

                <button
                  className="update-btn"
                  onClick={() => navigate(`/update/${c.id}`)}
                >
                  Update
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteCustomer(c.id)}
                >
                  Delete
                </button>

                <button
                  className="plus-btn"
                  onClick={() => updatePaidWeek(c.id, c.paidWeeks)}
                >
                  +
                </button>

                <button
                  className="minus-btn"
                  onClick={() => decreasePaidWeek(c.id, c.paidWeeks)}
                >
                  -
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default GetAllCustomer;