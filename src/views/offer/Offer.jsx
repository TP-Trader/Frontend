import React, { Component } from "react";
import { states, locations, cities } from "../../data";
import './offer.css'

export default class Offer extends Component {
  state = {
    states: states,
    cities: cities,
    locations: locations
  };

  render() {
    return (
      <div>
        <div className="offer-container">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Post Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Enter City</label>
              <select class="form-control" id="exampleFormControlSelect1">
                {this.state.cities.map((city, i) => (
                  <option key={i}>{city}</option>
                ))}
                {/* <option>1</option> */}
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Enter Category</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Supplies</option>
                <option>Food</option>
                <option>Services</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Offer or Need?</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Offer</option>
                <option>Need</option>
              </select>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />

              <label class="form-check-label" for="inlineCheckbox1">
                Toilet Paper
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />

              <label class="form-check-label" for="inlineCheckbox2">
                Bottled Water
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
              />

              <label class="form-check-label" for="inlineCheckbox2">
                Gloves
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
              />

              <label class="form-check-label" for="inlineCheckbox2">
                Masks
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
              />

              <label class="form-check-label" for="inlineCheckbox3">
                Hand Sanitizer
              </label>
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Details</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
