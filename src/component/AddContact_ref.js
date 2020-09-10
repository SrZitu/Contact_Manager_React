import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "Md. Sazzadur Rahman Zitu",
    email: "zitu094@gmail.com",
    phone: "01744822755",
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="">
        <div className="card  text-white">
          <h4 className="card-title">Add Contact</h4>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name.."
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email.."
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg text-capitalize"
                  placeholder="Enter Phone.."
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <input
                type="submit"
                value="add contact"
                className="btn btn-light btn-block text-capitalize"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
