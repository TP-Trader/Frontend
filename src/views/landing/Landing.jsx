import React, { Component } from "react";
import { Link } from "react-router-dom";
import MostRecent from "./mostrecent.json";
import "./landing.css";
import { states, locations, cities } from "../../data";

export default class Landing extends Component {
  state = {
    mostRecent: MostRecent,
    cities: cities
  };
  render() {
    console.log(this.state.mostRecent);
    return (
      <div classname="landing-container">
        <div>
          <Link to="/posttrade">Create Post</Link>
          <form className="city-form">
            <div class="form-group">
              <label for="exampleFormControlSelect1">Enter City</label>
              <select class="form-control" id="exampleFormControlSelect1">
                {this.state.cities.map((city, i) => (
                  <option key={i}>{city}</option>
                ))}
              </select>
            </div>
          </form>
        </div>

        <div className="grid-container">
          <div class="container most-recent">
            <div class="row head-row">
              <div class="col">#</div>
              <div class="col">Location</div>
              <div class="col">Offer</div>
              <div class="col">Need</div>
              <div class="col">flexibility</div>
              <div class="col">trade</div>
            </div>
            {this.state.mostRecent.map((recent, i) => (
              <div class="row row-color" key={i}>
                <div class="col">{recent.id}</div>
                <div class="col">{recent.location}</div>
                <div class="col">{recent.offer}</div>
                <div class="col">{recent.need}</div>
                <div class="col">{recent.flexibility}</div>
                <div class="col">
                  <Link to="/offer">click to trade</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
