import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };

  handleShowInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const information = <p>{info}</p>;
    const removeTour = this.props.removeTour;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="Tour" />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            Information{" "}
            <span onClick={this.handleShowInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo ? information : null}
        </div>
      </article>
    );
  }
}
