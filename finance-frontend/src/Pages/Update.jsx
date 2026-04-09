import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import "../styles/update.css"

const Update = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    totalAmount: "",
    interestAmount: "",
    totalWeeks: "",
    paidWeeks: ""
  })

  useEffect(() => {
    fetchCustomer()
  }, [])

  const fetchCustomer = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/customers/getCustomerById/${id}`
      )

      setCustomer(response.data)

    } catch (error) {
      console.error("Error fetching customer:", error)
    }
  }

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await axios.put(
        `http://localhost:8080/customers/updateCustomer/${id}`,
        customer
      )

      alert("Customer Updated Successfully")

      navigate("/")

    } catch (error) {
      console.error("Update failed:", error)
    }
  }

  return (
    <div className="update-page">

      <div className="update-card">

        <h2 className="update-title">Update Customer</h2>

        <form className="update-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={customer.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Total Amount</label>
            <input
              type="number"
              name="totalAmount"
              value={customer.totalAmount}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Interest Amount</label>
            <input
              type="number"
              name="interestAmount"
              value={customer.interestAmount}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Total Weeks</label>
            <input
              type="number"
              name="totalWeeks"
              value={customer.totalWeeks}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Paid Weeks</label>
            <input
              type="number"
              name="paidWeeks"
              value={customer.paidWeeks}
              onChange={handleChange}
            />
          </div>

          <button className="update-btn" type="submit">
            Update Customer
          </button>

        </form>

      </div>

    </div>
  )
}

export default Update