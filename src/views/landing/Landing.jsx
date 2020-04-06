import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import RadioButton from "../../layout/buttons/RadioButton";
import "./landing.css";
import { connect } from "react-redux";
import { cities } from "../../data";
import { setAlert } from "../../actions/alertActions";
import { loadPosts, filteredPosts } from "../../actions/postActions";
import Header from "../../layout/header/header";

import PropTypes from "prop-types";

class Landing extends Component {
  state = {
    cities: cities,
    city: "",
    type: "",
    item: "",
    search: "",
    description: "",
    posts: [],
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      posts: this.props.loadPosts(),
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      posts: this.props.filteredPosts.map((post) => post),
    });
  };

  radioChangeHandler = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  componentDidMount = () => {
    this.props.loadPosts();
  };

  render() {
    const filteredPosts = this.props.posts.filter((post) =>
      post.postsCity.includes(this.state.city)
    );

    const needOfferPosts = filteredPosts.filter((post) =>
      post.type.includes(this.state.type)
    );

    const doublefiltered = needOfferPosts.filter((post) =>
      post.desiredItem.includes(this.state.item)
    );

    const triplefiltered = doublefiltered.filter((post) =>
      post.description.includes(this.state.search)
    );

    console.log(filteredPosts);
    console.log(doublefiltered);
    console.log(needOfferPosts);

    console.log(`state: ${this.state.type}`);

    return (
      <div className="landing-container">
        <div className="top-landing-container">
          <Header />

          <form className="city-form" onSubmit={this.onSubmit}>
            <div className="radio-btn-container">
              <RadioButton
                changed={this.radioChangeHandler}
                isSelected={this.state.type === "Need"}
                label="Need"
                value="Need"
                name="Need"
              />
              <RadioButton
                changed={this.radioChangeHandler}
                isSelected={this.state.type === "Offer"}
                label="Offer"
                value="Offer"
                name="Offer"
              />

              <RadioButton
                changed={this.radioChangeHandler}
                isSelected={this.state.type === ""}
                label="Both"
                value=""
                name="Both"
              />
            </div>

            {/* cities drop menu */}

            <div class="container flex-drop-menus">
              <div class="row">
                <div class="col-sm ">
                  <select
                    name="city"
                    onChange={this.onChange}
                    class="form-control form-group"
                    id='drop1'
                  >
                    <option value="">Choose a City</option>
                    {this.state.cities.map((city, i) => (
                      <option value={city} key={i}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="col-sm ">
                  <select
                    name="item"
                    onChange={this.onChange}
                    class="form-control form-group"
                    id="drop2"
                  >
                    <option value="">Item/Service</option>
                    <option value="Toilet Paper">Toilet Paper</option>
                    <option value="Labor">Labor/Outdoor Services</option>
                    <option value="Food">Non-Perishable Food</option>
                    <option value="Household Item">Household Item</option>
                    <option value="Supplies">Supplies</option>
                    <option value="Water">Bottled Water</option>
                    <option value="Batteries">Batteries</option>
                    <option value="Hand Sanitizer">Hand Sanitizer</option>
                    <option value="Tutoring">Online Tutoring/Coaching</option>
                    <option value="Talk">Just Need Someone to Talk To</option>
                    <option value="Zoom Party!">Zoom Party! 🎉 </option>
                    <option value="Masks/Gloves/PPE">Masks/Gloves/PPE</option>
                    {/* <option value="Food">Labor</option>
                <option value="Food">Labor</option> */}
                    {/* {this.state.cities.sort().map((city, i) => (
                  <option value={city} key={i}>
                    {city}
                  </option>
                ))} */}
                  </select>
                </div>
                <div class="col-sm search2">
                  <input
                    type="text"
                    name="search"
                    onChange={this.onChange}
                    placeholder="🔍Search"
                    id="search"
                    className="form-group"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Landing Page Grid */}

        <div className="card-container">
          {triplefiltered.map((post) => (
            <div
              class={
                post.type === "Need"
                  ? "row-color row-need"
                  : "row-color row-offer"
              }
              key={post.id}
            >
              <div className="row-top">
                <div className="date-posted">
                  Posted <br />
                  <Moment format="MM/DD/YYYY HH:MM">{post.date}</Moment>
                </div>

                <div
                  class={
                    post.type === "Need" ? "post-type-need" : "post-type-offer"
                  }
                >
                  {post.type}
                </div>
              </div>

              <div className="row-mid">
                {/* <span className="posted">
                  
                  <Moment fromNow ago>
                    {post.date}
                  </Moment>{" "}
                  ago
                </span> */}
                <div class="city-bold">{post.postsCity}</div>
              </div>

              <div className="row-bottom">
                <div class="">{post.desiredItem}</div>
                <div class="">{post.description}</div>
              </div>

              <div class="btn-row">
                <Link to="/offer" className="trade-btn">
                  click to trade
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  setAlert: PropTypes.func.isRequired,
  loadPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  posts: state.postsReducer.posts,
});

export default connect(mapStateToProps, { setAlert, loadPosts, filteredPosts })(
  Landing
);
