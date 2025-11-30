import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateJob from "./pages/CreateJob";
import JobDetails from "./pages/JobDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jobs from "./pages/Jobs";
import { JobProvider } from "./contexts/JobContext";
import Homee from "./pages/Homee";
function App() {
  return (
    <>
      {" "}
      <Router>
        {" "}
        <JobProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Homee />}></Route>
            <Route path="/jobs" element={<Jobs />}></Route>
            <Route path="/createJob" element={<CreateJob />}></Route>
            <Route path="/jobs/:jobId" element={<JobDetails />}></Route>
          </Routes>
          <Footer />{" "}
        </JobProvider>
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
      </Router>{" "}
    </>
  );
}

export default App;
