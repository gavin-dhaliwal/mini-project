import React from "react";

class NavbarV2 extends React.Component {
  componentDidMount() {
    document.body.style.margin = 0;
  }

  render() {
    return (
      <div className="nav-container">
        <h1 className="title">Pokemon Index</h1>

        <nav className="navbarnav">
          <ul className="navbarul">
            <li className="navbarli">
              <a className="navbara" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li className="navbarli">
              <a className="navbara" href="/">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavbarV2;
