import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../auth/actions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../styles/form.css";

class SignIn extends React.Component {
  state = { email: "", password: "" };

  hasEmailChanged = ({ target }) => {
    this.setState({ email: target.value });
  };

  hasPasswordChanged = ({ target }) => {
    this.setState({ password: target.value });
  };

  handelSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginUser(email, password));
  };

  render() {
    const { isAuthenticated, loginError } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Form className="form" onSubmit={e => e.preventDefault()}>
        <FormGroup>
          <Label>Email</Label>
          <Input name="email" onChange={this.hasEmailChanged} />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={this.hasPasswordChanged}
          />
        </FormGroup>
        {loginError ? <div>Unable to Login</div> : null}
        <Button onClick={this.handelSubmit}>Login</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError
  };
};

export default connect(mapStateToProps)(SignIn);
