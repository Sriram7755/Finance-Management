import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Create from "./Pages/create"
import GetAllCustomer from "./Pages/GetAllCustomer"
import Update from "./Pages/Update"
import Deletion from "./Pages/Deletion"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/GetAllCustomer" element={<GetAllCustomer />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/delete" element={<Deletion />} />
    </Routes>
  )
}

export default App