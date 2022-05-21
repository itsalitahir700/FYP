import React from "react";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (key, value) => {
    if (key === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    await fetch("http://localhost:3000/doctor/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.ok) {
          localStorage.setItem("login", true);
          localStorage.setItem("user", JSON.stringify(res));
          return res;
        }

        throw new Error(res.error || "Something went wrong");
      })
      .then((_responseJson) => {
        console.log(_responseJson);
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Login</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
