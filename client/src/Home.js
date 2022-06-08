import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [sizes, setSizes] = useState([]);
  const [search, setSearch] = useState();
  const getSizes = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      const jsonData = await response.json();
      setSizes(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getSizes();
  }, []);
  return (
    <div className="container mt-5">
      <input
        type="text"
        className="form-control rounded"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-bordered ">
        <tr className="display-6">
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Phone No.</th>
        </tr>
        {sizes.map((size) =>
          String(size.c_name).match(search) ? (
            <tr key={size.c_id} className="h5" style={{ height: "50px" }}>
              <td>{size.c_id}</td>
              <td>
                <Link
                  style={{ textDecoration: "none", color: "#284bc9" }}
                  to={`size/${size.c_id}`}
                >
                  {size.c_name}
                </Link>
              </td>
              <td>{String(size.c_date).slice(0, 10)}</td>
              <td>{size.c_phone}</td>
            </tr>
          ) : (
            <span></span>
          )
        )}
      </table>
    </div>
  );
};
export default Home;
