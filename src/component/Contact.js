import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

import { Consumer } from "../Context";
export default class contact extends Component {
  static propTypes = {
    // item: PropTypes.object.isRequired,
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired,
  };
  state = {
    showinfo: false,
  };
  handleClick = (e) => {
    this.setState({
      showinfo: !this.state.showinfo,
    });
  };
  handleDelete = async (id, dispatch) => {
    // this.props.deleteclickHandler();
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { name, id, email, phone } = this.props.item;

    const { showinfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container back ">
              <div className="row backg ">
                <div className="card person-list text-dark card-body mb-4">
                  <h4 className="name">
                    {name}{" "}
                    <i
                      style={{ cursor: "pointer" }}
                      className="fa fa-sort-down"
                      onClick={this.handleClick}
                    />
                    <i
                      className="fa fa-times"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "red",
                      }}
                      onClick={this.handleDelete.bind(this, id, dispatch)}
                    />
                    <Link to={`contact/edit/${id}`}>
                      <i
                        className="fa fa-pencil"
                        style={{
                          cursor: "pointer",
                          float: "right",
                          color: "black ",
                          marginRight: "1rem",
                        }}
                      />
                    </Link>
                  </h4>
                  {showinfo ? (
                    <ul className=" list-group text-capitalize ">
                      <li className="list-group-item">email:{email}</li>
                      <li className="list-group-item">Phone:{phone}</li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
