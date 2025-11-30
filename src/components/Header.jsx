import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="navbar-brand">
            HireEdge
          </Link>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/jobs" className="nav-link">
                Job Posting
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/createJob" className="nav-link">
                Post a Job
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
