import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import MateriGeneral from "./pages/Materi_General";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Materi from "./pages/Materi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/materigeneral" element={<MateriGeneral />} />
          <Route path="/managemateri/add" element={<AddProduct />} />
          <Route path="/managemateri/edit/:id" element={<EditProduct />} />
          <Route path='/managemateri' element={<Materi />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
