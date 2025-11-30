import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const JobContext = createContext();
export const useJobContext = () => useContext(JobContext);

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    location: "",
    salary: "",
    jobType: "",
    jobDescription: "",
    qualifications: "",
  });

  const location = useLocation();

  const baseUrl = "https://hire-edge-backend.vercel.app/jobs";
  const url = `${baseUrl}${location.search}`; // <-- critical line

  const { data, loading, error } = useFetch(url);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setJobs(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.companyName ||
      !formData.location ||
      !formData.salary ||
      !formData.jobType ||
      !formData.jobDescription ||
      !formData.qualifications
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    const qualificationsArray = formData.qualifications
      .split(",")
      .map((q) => q.trim())
      .filter((q) => q !== "");

    const jobBody = {
      title: formData.title,
      company: [
        {
          companyName: formData.companyName,
          location: formData.location,
          salary: Number(formData.salary),
          jobType: formData.jobType,
          jobDescription: formData.jobDescription,
          qualifications: qualificationsArray,
        },
      ],
    };

    try {
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobBody),
      });

      if (!res.ok) throw new Error("Failed to add job");

      const newJob = await res.json();

      setJobs((prev) => [...prev, newJob]);

      toast.success("Job posted successfully!");

      setFormData({
        title: "",
        companyName: "",
        location: "",
        salary: "",
        jobType: "",
        jobDescription: "",
        qualifications: "",
      });

      navigate("/jobs");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }
      setJobs((prev) => prev.filter((job) => job._id !== id));
      toast.success("Job deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        error,
        handleDelete,
        formData,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
