import "./Ptop.css";
import Image from "./brain.png";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { ImDroplet } from "react-icons/im";
import { GiStethoscope, GiMedicalDrip, GiThink, GiBrain } from "react-icons/gi";
import { RiEmotionUnhappyLine, RiMentalHealthFill } from "react-icons/ri";
import { MdOutlineMoodBad } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Dialog } from "primereact/dialog";
import { Button } from "react-bootstrap";
import { InputText } from "primereact/inputtext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Ptop() {
  const [patients, setPatients] = React.useState([]);
  const [patientProgress, setPatientProgress] = React.useState({
    labels: [],
    datasets: [],
  });
  const [displayBasic, setDisplayBasic] = React.useState(false);
  const [patientDetails, setPatientDetails] = React.useState({});
  const [progressDetails, setProgressDetails] = React.useState({});
  const [progressModal, setProgressModal] = React.useState(false);
  const [uploadModal, setUploadModal] = React.useState(false);
  const [patientUploadId, setPatientUploadId] = React.useState("");
  const [recordingModal, setRecordingsModal] = React.useState(false);
  const [patientRecordings, setPatientRecordings] = React.useState([]);
  const [activePatientDetails, setActivePatientDetails] = React.useState({});

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  };

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("patientId", patientUploadId);
    formData.append("recording", file);
    await fetch(`http://localhost:3000/patient/recording`, {
      method: "POST",
      body: formData,
      headers: {},
    })
      .then((res) => {
        setPatientUploadId("");
        setUploadModal(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleProgressChange = (value, key) => {
    setProgressDetails({ ...progressDetails, [key]: value });
  };

  const handleChange = (value, key) => {
    setPatientDetails({ ...patientDetails, [key]: value });
  };

  const addProgress = (patientId) => {
    setProgressDetails({ ...progressDetails, pId: patientId });
    setProgressModal(true);
  };

  const handlePatientProgressAdd = async () => {
    console.log(progressDetails);
    await fetch(
      `http://localhost:3000/patient/add-progress/${progressDetails.pId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(progressDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProgressModal(false);
        setProgressDetails({});
        getPatientProgress(progressDetails.pId);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const getPatientDetails = async (patientId) => {
    await fetch(`http://localhost:3000/patient/details/${patientId}`)
      .then((res) => res.json())
      .then((data) => {
        setActivePatientDetails(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handlePatientAdd = async () => {
    await fetch("http://localhost:3000/patient/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientDetails),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((_responseJson) => {
        setDisplayBasic(false);
        getPatients();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getPatients = async () => {
    const response = await fetch("http://localhost:3000/patient/list");
    setPatients(await response.json());
  };

  const getPatientProgress = async (id) => {
    getPatientDetails(id);
    const response = await fetch(
      `http://localhost:3000/patient/progress/${id}`
    );
    const res = await response.json();
    const progress = res.filter((patient) => "createdAt" in patient);
    const data = {
      labels: progress.map((patient) => {
        const created = new Date(patient?.createdAt).toLocaleDateString();
        return created;
      }),
      datasets: [
        {
          label: "Patient Progress",
          data: progress.map((patient) => patient.progress),
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };
    console.log(data);
    setPatientProgress(data);
  };

  const getRecordings = async (id) => {
    const response = await fetch(
      `http://localhost:3000/patient/recording/${id}`
    );
    const res = await response.json();
    console.log(res);
    setPatientRecordings(res);
  };

  const getRecording = async (fileName) => {
    window.open(
      `http://localhost:3000/patient/recording/${patientUploadId}/${fileName}`,
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  React.useEffect(() => {
    getPatients();
  }, []);

  return (
    <div className="container">
      <Button color="secondary" onClick={() => setDisplayBasic(true)}>
        Add Patient +
      </Button>
      {patientProgress.length && <Line data={patientProgress}></Line>}
      <div className="row">
        <div className="col-md-8">
          <div className="card a ">
            <div className="card-body">
              <span className="card-text ">
                <b>
                  {activePatientDetails?.fullName} Health Summary
                  <span className="health-icon">
                    {" "}
                    <RiMentalHealthFill />
                  </span>
                </b>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card b">
            <div className="card-body">
              <div className="card-title">
                Patient Id
                <span className="health-id">
                  <HiIdentification />
                </span>
              </div>
              <span className="card-text  ">
                <b>{activePatientDetails?._id}</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card ">
            <div className="card-body">
              <div className="card-title  ">
                {activePatientDetails?.heart_rate} bph
                <span className="heart">
                  {" "}
                  <BsFillSuitHeartFill />
                </span>
              </div>
              <span className="card-text  ">
                <b>Heart Rate</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card ">
            <div className="card-body">
              <div className="card-title">
                {activePatientDetails?.blood_pressure}mmHG
                <span className="heart">
                  {" "}
                  <ImDroplet />
                </span>
              </div>

              <span className="card-text  ">
                <b>Blood Pressure</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card ">
            <div className="card-body">
              <div className="card-title  ">
                {activePatientDetails?.respiratory_rate} bpm
                <span className="heart">
                  {" "}
                  <GiStethoscope />
                </span>
              </div>
              <span className="card-text  ">
                <b>Respiratory Rate</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card ">
            <div className="card-body">
              <div className="card-title">
                {activePatientDetails?.glucose} mg/dl
                <span className="heart">
                  {" "}
                  <GiMedicalDrip />
                </span>
              </div>

              <span className="card-text  ">
                <b>Blood Glucose</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card ">
            <div className="card-body">
              <div className="card-title  ">
                {activePatientDetails?.mood}
                <span className="heart">
                  {" "}
                  <RiEmotionUnhappyLine />
                </span>
              </div>
              <span className="card-text  ">
                <b>Patient's Mood</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card ">
            <div className="card-body">
              <div className="card-title">
                {activePatientDetails?.anxiety}
                <span className="heart">
                  {" "}
                  <MdOutlineMoodBad />
                </span>
              </div>

              <span className="card-text  ">
                <b>Anxiety Level</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card ">
            <div className="card-body">
              <div className="card-title  ">
                {activePatientDetails?.thought}
                <span className="heart">
                  {" "}
                  <GiThink />
                </span>
              </div>
              <span className="card-text  ">
                <b>Thought Content</b>
              </span>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card ">
            <div className="card-body">
              <div className="card-title">
                {activePatientDetails?.prescription}
                <span className="heart">
                  {" "}
                  <GiBrain />
                </span>
              </div>

              <span className="card-text  ">
                <b>Perception</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 ">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Patient_ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Weight(KG)</th>
                <th scope="col">Disease</th>
                <th scope="col">FB</th>
                <th scope="col">Twitter</th>
                <th scope="col">Progress</th>
                <th scope="col">Recordings</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr>
                  <th scope="row">{patient._id}</th>
                  <td>
                    <b onClick={() => getPatientProgress(patient._id)}>
                      {patient.fullName}
                    </b>
                  </td>
                  <td>{patient.age}</td>
                  <td>{patient.weight}</td>
                  <td>{patient.disease}</td>
                  <td>
                    <a
                      href={"//" + patient?.fb_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      view
                    </a>
                  </td>
                  <td>
                    <a
                      href={patient?.twitter_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      view
                    </a>
                  </td>
                  <td>
                    <Button onClick={() => addProgress(patient._id)}>
                      Add
                    </Button>
                  </td>
                  <td className="d-flex justify-content-between">
                    <Button
                      onClick={() => {
                        setRecordingsModal(true);
                        setPatientUploadId(patient._id);
                        getRecordings(patient._id);
                      }}
                    >
                      View
                    </Button>
                    <Button
                      onClick={() => {
                        setUploadModal(true);
                        setPatientUploadId(patient._id);
                      }}
                    >
                      Add
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Line data={patientProgress}></Line>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="container">
            <div className="row socialmedia">
              <h3 className="titlesocial">
                <b>Patient Social Media</b>{" "}
              </h3>
              <hr />
              <div className="col-4">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" class="btn btn-outline-primary">
                    <BsFacebook />
                  </button>
                </div>
              </div>

              <div className="col-4">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" class="btn btn-outline-primary">
                    <AiFillTwitterCircle />
                  </button>
                </div>
              </div>

              <div className="col-4">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" class="btn btn-outline-primary">
                    <AiFillInstagram />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 session">
          <div className="container">
            <div className="row">
              <h3 className="titlesession">
                <b>Patient Session Recording</b>{" "}
              </h3>
              <hr />

              <div className="col-lg-12 overflow-auto">
                <a href="https://www.youtube.com/watch?v=9_yy6Ey-RBg">
                  <b>Session-1</b>
                </a>

                <div>
                  <a href="https://www.youtube.com/watch?v=9_yy6Ey-RBg">
                    <b>Session-2</b>
                  </a>
                </div>
                <div>
                  <a href="https://www.youtube.com/watch?v=9_yy6Ey-RBg">
                    <b>Session-3</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        header="Add Patient"
        visible={displayBasic}
        style={{ width: "50vw" }}
        footer={<Button onClick={handlePatientAdd}>Add</Button>}
        onHide={() => setDisplayBasic(false)}
      >
        <div className="container">
          <div className="mt-b">
            <label>Patient Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e.target.value, "fullName")}
            />
          </div>
          <div className="mt-b">
            <label>Patient Age</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e.target.value, "age")}
            />
          </div>

          <div className="mt-b">
            <label>Patient Weight</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e.target.value, "weight")}
            />
          </div>
          <div className="mt-b">
            <label>Patient Disease</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e.target.value, "disease")}
            />
          </div>
          <div className="mt-b">
            <label>Patient Email</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e.target.value, "email")}
            />
          </div>
          <div className="mt-b">
            <label>Patient Facebook</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e.target.value, "fb_link")}
            />
          </div>
          <div className="mt-b=">
            <label>Patient Twitter</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e.target.value, "twitter_link")}
            />
          </div>
          <div className="mt-4">
            <h4>Patient Readings</h4>
            <div className="mt-b">
              <label>Patient Blood Pressure</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => handleChange(e.target.value, "blood_pressure")}
              />
            </div>
            <div className="mt-b">
              <label>Patient Heart Rate</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => handleChange(e.target.value, "heart_rate")}
              />
            </div>
            <div className="mt-b">
              <label>Patient Respiratory Rate</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) =>
                  handleChange(e.target.value, "respiratory_rate")
                }
              />
            </div>
            <div className="mt-b">
              <label>Patient Glucose</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => handleChange(e.target.value, "glucose")}
              />
            </div>
            <div className="mt-b">
              <label>Patient Mood</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => handleChange(e.target.value, "mood")}
              />
            </div>
            <div className="mt-b">
              <label>Patient Anxiety</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => handleChange(e.target.value, "anxiety")}
              />
            </div>
            <div className="mt-b">
              <label> Patient Thought</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => handleChange(e.target.value, "thought")}
              />
            </div>
            <div className="mt-b">
              <label>Patient Prescription</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => handleChange(e.target.value, "prescription")}
              />
            </div>
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Add Patient Progress"
        visible={progressModal}
        style={{ width: "50vw" }}
        footer={<Button onClick={() => handlePatientProgressAdd()}>Add</Button>}
        onHide={() => setProgressModal(false)}
      >
        <div className="container">
          <div className="mt-b">
            <label>Patient Progress for {getCurrentDate()}</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => handleProgressChange(e.target.value, "progress")}
            />
          </div>
        </div>
      </Dialog>
      <Dialog
        header="Upload Patient Recording"
        visible={uploadModal}
        style={{ width: "50vw" }}
        onHide={() => setUploadModal(false)}
      >
        <div className="container">
          <div className="mt-b">
            <label>Patient Recording for {getCurrentDate()}</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleUpload(e.target.files[0], "recording")}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Patient Recordings"
        visible={recordingModal}
        style={{ width: "50vw" }}
        onHide={() => setRecordingsModal(false)}
      >
        <div className="container">
          {patientRecordings.map((recording) => (
            <div className="mt-4">
              <strong onClick={() => getRecording(recording.fileName)}>
                {recording?.name}
              </strong>
            </div>
          ))}
        </div>
      </Dialog>
    </div>
  );
}
