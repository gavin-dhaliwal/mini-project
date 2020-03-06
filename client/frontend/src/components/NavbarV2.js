import React from "react";
import "../styles/navbarV2.css";
import { connect } from "react-redux";
import { logoutUser } from "../auth/actions";

class NavbarV2 extends React.Component {
  componentDidMount() {
    document.body.style.margin = 0;
  }

  onChange() {
    const selectBox = document.getElementById("order");
    const selectedValue = selectBox.options[selectBox.selectedIndex].value;
    this.props.orderby(selectedValue);
  }

  handelSignOut() {
    const { dispatch } = this.props;

    dispatch(logoutUser());
  }

  checkAuth() {
    return this.props.isAuthenticated ? (
      <button className="signoutButton" onClick={() => this.handelSignOut()}>
        SIGN OUT
      </button>
    ) : (
      <a className="navbara" href="/signin">
        Sign In
      </a>
    );
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
              <a href="/about">About</a>
            </li>
            <li className="navbarli">{this.checkAuth()}</li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(NavbarV2);
