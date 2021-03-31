import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [record, setRecord] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email && user.password && user.phone) {
      const newUser = {
        ...user,
        id: new Date().getTime().toString(),
      };
      setRecord([...record, newUser]);
      setUser({
        name: "",
        email: "",
        password: "",
        phone: "",
      });
    } else {
      alert("please fill the input fields");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-5 mt-5 mx-auto">
          <div className="card bg-dark text-light">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-9 mx-auto mt-3">
          {record.map((info) => {
            const { name, email, password, phone, id } = info;
            return (
              <div className="card bg-primary text-light" key={id}>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <p>{name}</p>
                  <p>{email}</p>
                  <p>{password}</p>
                  <p>{phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
