import React from "react";

function SignUp() {
  const [doctor, setDoctor] = React.useState({});

  const handleChange = (key, value) => {
    setDoctor({ ...doctor, [key]: value });
  };

  const signUp = async () => {
    console.log(doctor);
    await fetch("http://localhost:3000/doctor/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctor),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((_responseJson) => {
        console.log(_responseJson);
        window.location.href = "/login";
      })
      .catch((error) => {
        alert(error);
      });
  };

  const convertToBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Sign Up</h3>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type={"email"}
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Name</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Speciality</label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Specialty"
                  onChange={(e) => handleChange("specialty", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type={"password"}
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Profile Picture</label>
                <input
                  type={"file"}
                  className="form-control"
                  placeholder="Profile Picture"
                  accept="image/*"
                  onChange={(e) =>
                    convertToBase64(e.target.files[0], (result) => {
                      setDoctor({ ...doctor, profile_pic: result });
                    })
                  }
                />
              </div>
              <button
                onClick={signUp}
                type="submit"
                className="btn btn-primary mt-4"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
