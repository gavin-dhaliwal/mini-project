import React from "react";
import "../styles/navbarV2.css";

class NavbarV2 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.style.margin = 0;
  }

  onChange() {
    const selectBox = document.getElementById("order");
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    this.props.orderby(selectedValue);
  }

  render() {
    return (
      <div className="nav-container">
        <h1 className="title">Pokemon Index</h1>
        <nav className="navbarnav">
          <ul className="navbarul">
            <select
              className="order"
              id="order"
              onChange={() => this.onChange()}
            >
              <option selected disabled hidden>
                Order By
              </option>
              <option value={"asc"}>Order By A - Z</option>
              <option value={"dec"}>Order By Z - A</option>
            </select>
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
