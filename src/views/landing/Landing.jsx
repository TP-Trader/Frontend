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
            <div
              className="radio-btn-container"
            >
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
            <div className="form-group">
              <select
                name="city"
                onChange={this.onChange}
                class="form-control"
                
              >
                <option value="">Choose a City</option>
                {this.state.cities.map((city, i) => (
                  <option value={city} key={i}>
                    {city}
                  </option>
                ))}
              </select>
              {/* Item/Service drop menu */}
            </div>
            <div class="form-group">
              <select
                name="item"
                onChange={this.onChange}
                class="form-control"
             
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
            <div className='search2'>
              <input
                type="text"
                name="search"
                onChange={this.onChange}
                placeholder="Search"
                id="search"
                className="form-group"
               
              />
            </div>
          </form>
        </div>

        {/* Landing Page Grid */}

        <div className="grid-container">
          <div class="container most-recent">
            <div class="row head-row">
              <div class="col">#</div>
              <div class="col">City</div>
              <div class="col">Need/Offer</div>
              <div class="col">Item(s)</div>
              <div class="col">Description</div>
              <div class="col">trade</div>
            </div>
            {triplefiltered.map((post) => (
              <div class="row row-color" key={post.id}>
                <div class="col">
                  {" "}
                  <Moment local parse="YYYY-MM-DD HH:mm">
                    {post.date}
                  </Moment>{" "}
                  <br />{" "}
                  <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                    Posted{" "}
                    <Moment fromNow ago>
                      {post.date}
                    </Moment>{" "}
                    ago
                  </span>{" "}
                </div>
                <div class="col">{post.postsCity}</div>
                <div class="col">{post.type}</div>
                <div class="col">{post.desiredItem}</div>
                <div class="col">{post.description}</div>
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
