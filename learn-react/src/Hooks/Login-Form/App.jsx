import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = {
        email,
        password,
      };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("please fill the data");
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
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
        <div className="col-7 mx-auto mt-3">
          {allEntry.map((user, index) => {
            return (
              <div key={index} className="card bg-primary text-light">
                <div className="card-body d-flex justify-content-between">
                  <p>Email: {user.email} </p>
                  <p>Password: {user.password} </p>
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
