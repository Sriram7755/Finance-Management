import React, { useState } from 'react'
import axios from 'axios'

const Deletion = () => {

  const [id, setId] = useState("")

  const handleDelete = async (e) => {
    e.preventDefault()

    await axios.delete(`http://localhost:8080/customers/deleteCustomer/${id}`)

    alert("Customer Deleted Successfully")
  }

  return (
    <div>

      <h2>Delete Customer</h2>

      <form onSubmit={handleDelete}>

        <input
          type="number"
          placeholder="Enter Customer ID"
          onChange={(e) => setId(e.target.value)}
        />

        <br /><br />

        <button type="submit">Delete</button>

      </form>

    </div>
  )
}

export default Deletion