import React from "react";
import "../styles/navbarV2.css";

class NavbarV2 extends React.Component {
  componentDidMount() {
    document.body.style.margin = 0;
  }

  render() {
    return (
      <div className="container">
        <h3 className="title">Pokemon Index</h3>

        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavbarV2;
