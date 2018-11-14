import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" type="text" component="input" autoComplete="none" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" component="input" autoComplete="none" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <Field name="passwordConfirm" type="password" component="input" autoComplete="none" className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
})(Signup);
