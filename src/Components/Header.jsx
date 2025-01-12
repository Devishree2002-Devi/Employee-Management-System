import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import gsap from 'gsap';

const Header = () => {
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");

  const onlogout = () => {
    if (email && password) {
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("password");
      Swal.fire('Congrats', 'Logged out successfully!', 'success');
      navigate('/');
    } else {
      Swal.fire('Error', 'You are not logged in!', 'error');
    }
  };

  // GSAP Animation for logo and nav items
  useEffect(() => {
    gsap.from('.navbar-brand', {
      opacity: 0,
      duration: 1,
      x: -50,
      ease: 'power3.out',
    });

    gsap.from('.nav-item', {
      opacity: 0,
      duration: 1,
      y: 50,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);

  return (
    <>
      <style>
        {`
          /* Header Styles */
          .navbar {
            background: linear-gradient(45deg, #3498db, #2ecc71); /* Gradient background */
            padding: 1.2rem 2rem; /* Adjusted padding */
            border-radius: 0px; /* No border radius */
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); /* Light shadow */
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .navbar-brand {
            font-size: 2rem;
            color: white;
            font-weight: bold;
            letter-spacing: 2px;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .navbar-brand:hover {
            color: #f39c12; /* Golden hover effect */
          }

          .navbar-toggler {
            border-color: #f39c12; /* Border color for the toggler */
          }

          .navbar-toggler-icon {
            background-color: #f39c12; /* Golden color for the icon */
          }

          /* Navbar Items List Styling */
          .navbar-nav {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
          }

          .nav-item {
            margin-left: 2rem;
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
            position: relative;
          }

          .nav-item:hover {
            transform: scale(1.1); /* Zoom effect on hover */
          }

          /* Styling for the links */
          .nav-link {
            color: white;
            font-size: 1.1rem;
            font-weight: 500;
            transition: color 0.3s ease, transform 0.3s ease-in-out;
            text-decoration: none;
          }

          .nav-link:hover {
            color: #f39c12;
            transform: scale(1.05); /* Slight zoom on hover */
          }

          /* Logout Link */
          .nav-link.onlogout {
            color: #e74c3c;
          }

          .nav-link.onlogout:hover {
            color: #c0392b; /* Darker red on hover */
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .navbar-collapse {
              background-color: #34495e;
              border-radius: 5px;
            }

            .nav-link {
              padding: 1rem;
            }

            .nav-item {
              margin-left: 0; /* Reset margin in mobile view */
            }
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Employee Management System</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {email && password ? (
                <>
                  <li className="nav-item" style={{color: 'white'}}>
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item" style={{marginTop: '-4rem'}}>
                    <a className="nav-link" href="/add">
                      Add
                    </a>
                  </li>
                  <li className="nav-item" style={{marginTop: '-5.9rem'}}>
                    <a className="nav-link" href="/view">
                      View
                    </a>
                  </li>
                  <li className="nav-item" style={{marginTop: '-6rem'}}>
                    <a className="nav-link onlogout" href="#" onClick={onlogout}>
                      Logout
                    </a>
                 </li>
                </>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
