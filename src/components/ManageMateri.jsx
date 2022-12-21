import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageMateri = () => {
  const [materis, setMateris] = useState([]);

  useEffect(() => {
    getMateris();
  }, []);

  const getMateris = async () => {
    const response = await axios.get("http://localhost:5000/materis");
    setMateris(response.data);
  };

  const deleteMateri = async (materiId) => {
    await axios.delete(`http://localhost:5000/materis/${materiId}`);
    getMateris();
  };
  
  return (
    <div>
      <h1 className="title">Materi</h1>
      <h2 className="subtitle">Daftar Materi</h2>
      <Link to="/managemateri/add" className="button is-primary mb-2">
        Tambah materi
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Materi</th>
            <th>Link Materi</th>
            <th>Dibuat Oleh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {materis.map((materi, index) => (
            <tr key={materi.uuid}>
              <td>{index + 1}</td>
              <td>{materi.nama_materi}</td>
              <td> <Link to={materi.link_materi}>{materi.link_materi}</Link> </td>
              <td>{materi.user.name}</td>
              <td>
                <Link
                  to={`/managemateri/edit/${materi.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteMateri(materi.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMateri;
