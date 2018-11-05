import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to log user in
    this.props.signinUser({ email, password }, () => this.props.history.push('/feature'));
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" type="text" component="input" autoComplete="none" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" component="input" autoComplete="none" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({
    form: 'signin',
    fields: ['email', 'password']
  })
)(Signin);
