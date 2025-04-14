import React from "react";


const SettingInfo = () => {
  const versions = [
    { name: "Chrome", version: "135.0.7049.84/85" },
    { name: "V8 Engine", version: "12.5" },
    { name: "React.js", version: React.version },
    { name: "Node.js", version: "20.11.1" },
    { name: "Express.js", version: "4.18.2" },
    { name: "MongoDB", version: "6.0.13" },
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#171717",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-center mb-5">Sitara Version Info</h1>
      <div className="row justify-content-center">
        {versions.map((item, index) => (
          <div
            key={index}
            className="col-md-4 mb-4 d-flex align-items-stretch"
          >
            <div className="card bg-dark text-white w-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Version: {item.version}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default SettingInfo;
