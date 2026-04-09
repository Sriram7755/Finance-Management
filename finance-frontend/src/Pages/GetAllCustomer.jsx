import {React,useState,useEffect} from 'react'
import axios from 'axios'

const GetAllCustomer = () => {

  const [customer,setCustomer] = useState([]);
  useEffect(()=>{
    fetchCustomer()
  },[])

  const fetchCustomer = async()=>{
    const response = await  axios.get("http://localhost:8080/customers/getCustomer")
    setCustomer(response.data || [])
    console.log(response.data)
  }

  return (
    <div>
      <h2>AllCustomer</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Total Amount</th>
            <th>Interest</th>
            <th>Total Weeks</th>
            <th>Paid Weeks</th>
            <th>Unpaid Weeks</th>
          </tr>
        </thead>

        <tbody>
          {customer && customer.map((customer) =>(
            <tr key = {customer.id}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.totalAmount}</td>
              <td>{customer.interestAmount}</td>
              <td>{customer.totalWeeks}</td>
              <td>{customer.paidWeeks}</td>
              <td>{customer.unpaidWeeks}</td>
            </tr>
          ))
          }
        </tbody>
        
      </table>
    </div>
  )
}

export default GetAllCustomer