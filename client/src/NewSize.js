import React from "react";
import { useState, useEffect } from "react";

const NewSize = () => {
  const [c_name, setName] = useState();
  const [c_phone, setPhone] = useState();
  const [c_tall, setTall] = useState();
  const [c_width, setWidth] = useState();
  const [c_shoulder, setShoulder] = useState();
  const [c_arm, setArm] = useState();
  const [c_neck, setNeck] = useState();
  const [c_description, setDescription] = useState();
  const [c_fabric_name, setFabric] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        c_name,
        c_phone,
        c_tall,
        c_width,
        c_shoulder,
        c_arm,
        c_neck,
        c_description,
        c_fabric_name,
      };
      const response = await fetch("http://localhost:5000/size", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} style={{ width: "50%", margin: "0 auto" }}>
        <div className="mb-3">
          <label for="c_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="c_name"
            value={c_name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="c_phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="c_phone"
            value={c_phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div class="form-text mb-3">All Measurements are in inch </div>
        <div className="mb-3 d-flex justify-content-around">
          <label for="c_tall" className="form-label pt-1">
            Tall
          </label>
          <input
            type="number"
            className="form-control w-25 "
            id="c_tall"
            value={c_tall}
            onChange={(e) => setTall(e.target.value)}
          />
          <label for="c_width" className="form-label pt-1">
            Width
          </label>
          <input
            type="number"
            className="form-control w-25"
            id="c_width"
            value={c_width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <label for="c_shoulder" className="form-label pt-1">
            Shoulder
          </label>
          <input
            type="number"
            className="form-control w-25"
            id="c_shoulder"
            value={c_shoulder}
            onChange={(e) => setShoulder(e.target.value)}
          />
        </div>
        <div className="mb-3 d-flex justify-content-around">
          <label for="c_arm" className="form-label pt-1">
            Arm
          </label>
          <input
            type="number"
            className="form-control w-25 "
            id="c_arm"
            value={c_arm}
            onChange={(e) => setArm(e.target.value)}
          />
          <label for="c_neck" className="form-label pt-1">
            Neck
          </label>
          <input
            type="number"
            className="form-control w-25"
            id="c_neck"
            value={c_neck}
            onChange={(e) => setNeck(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="c_description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="c_description"
            value={c_description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="c_fabric_name" className="form-label">
            Fabric name
          </label>
          <input
            type="text"
            className="form-control"
            id="c_fabric_name"
            value={c_fabric_name}
            onChange={(e) => setFabric(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewSize;
