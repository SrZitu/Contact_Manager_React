import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Context";
import "./contacts.css";
export default class Contacts extends Component {
  // deleteContact = (id) => {
  //   const { contacts } = this.state;
  //   const newContact = contacts.filter((item) => item.id !== id);
  //   this.setState({
  //     contacts: newContact,
  //   });
  //   console.log(id);
  // };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <>
              <div className="container contact-list-bg">
                <div className="row   ">
                  <div className="col-lg-8 mx-auto mb-5 ">
                    <h1 className="display-4 mb-2 text-white">
                      <span className="text-dark">Contact</span>
                      List
                    </h1>
                    {contacts.map((item) => (
                      <Contact
                        key={item.id}
                        id={item.id}
                        item={item}
                        // name={item.name}
                        // email={item.email}
                        // phone={item.phone}
                        // deleteclickHandler={this.deleteContact.bind(
                        //   this,
                        //   item.id
                        // )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Consumer>
    );
  }
}
