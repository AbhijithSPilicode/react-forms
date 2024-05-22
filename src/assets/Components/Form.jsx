import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
      },
      successMessage: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, contact } = this.state;
    const errors = {};

    if (!firstName) {
      errors.firstName = 'Please enter your first name!';
    }
    if (!lastName) {
      errors.lastName = 'Please enter your last name!';
    }
    if (!email) {
      errors.email = 'Please enter your email!';
    } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      errors.email = 'Invalid email format!';
    }
    if (!contact) {
      errors.contact = 'Please enter your contact number!';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors, successMessage: '' });
    } else {
      this.setState({ errors: {}, successMessage: 'Registration successful!' });
    }
  };

  render() {
    const { firstName, lastName, email, contact, errors, successMessage } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {successMessage && <h2>{successMessage}</h2>}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={this.handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <br />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={contact}
          onChange={this.handleChange}
        />
        {errors.contact && <p>{errors.contact}</p>}
        <br />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default Form;
