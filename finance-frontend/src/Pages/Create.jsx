import React, { useState } from "react"
import axios from "axios"
import "../styles/update.css"

const Create = () => {

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    totalAmount: "",
    interestAmount: "",
    totalWeeks: ""
  })

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post(
      "http://localhost:8080/customers/createCustomer",
      customer
    )

    alert("Customer Created Successfully")
  }

  return (
    <div className="update-page">

      <div className="update-card">

        <h2 className="update-title">Create Customer</h2>

        <form className="update-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Total Amount</label>
            <input
              type="number"
              name="totalAmount"
              placeholder="Enter amount"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Interest Amount</label>
            <input
              type="number"
              name="interestAmount"
              placeholder="Enter interest"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Total Weeks</label>
            <input
              type="number"
              name="totalWeeks"
              placeholder="Enter total weeks"
              onChange={handleChange}
            />
          </div>

          <button className="update-btn" type="submit">
            Create Customer
          </button>

        </form>

      </div>

    </div>
  )
}

export default Create