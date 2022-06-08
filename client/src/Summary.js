import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Summary = () => {
  const { id } = useParams();
  const [size, setSize] = useState([]);
  const getSize = async () => {
    try {
      const response = await fetch(`http://localhost:5000/size/${id}`);
      const jsonData = await response.json();
      setSize(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getSize();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <h1>Summary</h1>
        <div className="col">
          <table className="table table-bordered">
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Customer number
              </td>
              <td>
                <small className="text-muted h5">{size.c_id}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Name
              </td>
              <td>
                <small className="text-muted h5">{size.c_name}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Phone number
              </td>
              <td>
                <small className="text-muted h5">{size.c_phone}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Date
              </td>
              <td>
                <small className="text-muted h5">
                  {String(size.c_date).slice(0, 10)}
                </small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Tall
              </td>
              <td>
                <small className="text-muted h5">{size.c_tall}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Width
              </td>
              <td>
                <small className="text-muted h5">{size.c_width}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Shoulder
              </td>
              <td>
                <small className="text-muted h5">{size.c_shoulder}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Arm
              </td>
              <td>
                <small className="text-muted h5">{size.c_arm}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Neck
              </td>
              <td>
                <small className="text-muted h5">{size.c_neck}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Description
              </td>
              <td>
                <small className="text-muted h5">{size.c_description}</small>
              </td>
            </tr>
            <tr>
              <td className="h5" style={{ width: "50%", height: "40px" }}>
                Fabric name
              </td>
              <td>
                <small className="text-muted h5">{size.c_fabric_name}</small>
              </td>
            </tr>
          </table>
        </div>
        <div className="col justify-content-center">
          <div
            class="card mt-5 w-50 "
            style={{
              backgroundColor: "#1d56b3",
              color: "white",
              fontSize: "1.1rem",
            }}
          >
            <div class="card-body">
              <h5 class="card-title white">One Sided Fabric Roll</h5>
              <p class="card-text">
                Required fabric length is {size.c_tall * 0.084} m
              </p>
            </div>
          </div>
          <div
            class="card mt-5 w-50 "
            style={{
              backgroundColor: "#1d56b3",
              color: "white",
              fontSize: "1.1rem",
            }}
          >
            <div class="card-body">
              <h5 class="card-title white">Two Sided Fabric Roll</h5>
              <p class="card-text">
                Required fabric length is {size.c_tall * 0.056} m
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Summary;
