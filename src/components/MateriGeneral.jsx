import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MateriList = () => {
  const [materis, setMateris] = useState([]);

  useEffect(() => {
    getMateris();
  }, []);

  const getMateris = async () => {
    const response = await axios.get("http://localhost:5000/materis");
    setMateris(response.data);
  };


  return (
    <div>
      <h1 className="title">Materi</h1>
      <h2 className="subtitle">Daftar Materi</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Mata Kuliah</th>
            <th>Materi</th>
            <th>Link Materi</th>
            <th>Waktu Tenggat</th>
            <th>Nama Dosen</th>
          </tr>
        </thead>
        <tbody>
          {materis.map((materi, index) => (
            <tr key={materi.uuid}>
              <td>{index + 1}</td>
              <td>{materi.mata_kuliah}</td>
              <td>{materi.nama_materi}</td>
              <td> <Link to={materi.link_materi}>{materi.link_materi}</Link> </td>
              <td>{materi.tenggat_waktu}</td>
              <td>{materi.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MateriList;
