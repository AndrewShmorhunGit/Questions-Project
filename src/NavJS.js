import myImg3 from "./img/js-img.png";
import "./styleJS.css";

const NavJS = () => {
  return (
    <header className="nav-container">
      <nav className="navigation">
        <nav className="nav-link">
          <svg
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#212529"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="116"
              cy="116"
              r="84"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></circle>
            <line
              x1="175.4"
              y1="175.4"
              x2="224"
              y2="224"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
          <a className="link" href="#About">
            Search
          </a>
        </nav>
        <nav className="nav-link">
          <svg
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#212529"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="128"
              y1="176"
              x2="128"
              y2="80"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <path
              d="M88,144a40,40,0,1,1-40,40v-6.7"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
            <path
              d="M168,144a40,40,0,1,0,40,40v-6.7"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
            <path
              d="M72,180H64A48,48,0,0,1,48,86.7V72a40,40,0,0,1,80,0V184"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
            <path
              d="M184,180h8a48,48,0,0,0,16-93.3V72a40,40,0,0,0-80,0"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
            <path
              d="M88,84v8a28,28,0,0,1-28,28"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
            <path
              d="M168,84v8a28,28,0,0,0,28,28"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
          </svg>
          <a className="link" href="#Source">
            Source
          </a>
        </nav>
        <nav className="nav-link">
          <svg
            className="nav-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#212529"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <polyline
              points="136 176 88 224 40 176"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></polyline>
            <path
              d="M200,176V88a56,56,0,0,0-56-56h0A56,56,0,0,0,88,88V224"
              fill="none"
              stroke="#212529"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
          </svg>
          <a className="link" href="#Back">
            Back
          </a>
        </nav>
        <img className="logo" src={myImg3} alt="java script logo" />
      </nav>
    </header>
  );
};

export default NavJS;
