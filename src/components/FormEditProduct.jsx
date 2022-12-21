import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProduct = () => {
  const [name, setName] = useState("");
  const [link_mat, setLink] = useState("");
  const [mata_kuliah, setMatkul] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getMateriById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/materis/${id}`);
        setName(response.data.nama_materi);
        setLink(response.data.link_materi);
        setMatkul(response.data.mata_kuliah);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getMateriById();
  }, [id]);

  const updateMateri = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/materis/${id}`, {
        nama_materi: name,
        link_materi: link_mat,
        mata_kuliah: mata_kuliah,
      });
      navigate("/managemateri");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">Update User</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateMateri}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={link_mat}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={mata_kuliah}
                    onChange={(e) => setMatkul(e.target.value)}
                    placeholder="mata_kuliah"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditProduct;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const FormEditProduct = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const getMateriById = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/materis/${id}`
//         );
//         setName(response.data.nama_materi);
//         setPrice(response.data.link_materi);
//       } catch (error) {
//         if (error.response) {
//           setMsg(error.response.data.msg);
//         }
//       }
//     };
//     getMateriById();
//   }, [id]);

//   const updateMateri = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.patch(`http://localhost:5000/materis/${id}`, {
//         nama_materi: name,
//         link_materi: price,
//       });
//       navigate("/managemateri");
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//     }
//   };

//   return (
//     <div>
//       <h1 className="title">Products</h1>
//       <h2 className="subtitle">Edit Product</h2>
//       <div className="card is-shadowless">
//         <div className="card-content">
//           <div className="content">
//             <form onSubmit={updateMateri}>
//               <p className="has-text-centered">{msg}</p>
//               <div className="field">
//                 <label className="label">Name</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Product Name"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <label className="label">Price</label>
//                 <div className="control">
//                   <input
//                     type="text"
//                     className="input"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder="Price"
//                   />
//                 </div>
//               </div>

//               <div className="field">
//                 <div className="control">
//                   <button type="submit" className="button is-success">
//                     Update
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormEditProduct;
