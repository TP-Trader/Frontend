import React, { Component } from "react";
import { Link } from "react-router-dom";
import MostRecent from "./mostrecent.json";
import "./landing.css";
import { connect } from "react-redux";
import { states, locations, cities } from "../../data";
import { setAlert } from "../../actions/alertActions";
import { loadPosts } from "../../actions/postActions";

import PropTypes from "prop-types";

class Landing extends Component {
  state = {
    mostRecent: MostRecent,
    cities: cities
  };

  componentDidMount = () => {
    this.props.loadPosts();
  };

  render() {
    console.log(this.state.posts);
    console.log(this.props.posts)
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
              <div class="col">City</div>
              <div class="col">Need/Offer</div>
              <div class="col">Item(s)</div>
              <div class="col">Description</div>
              <div class="col">trade</div>
            </div>
            {this.props.posts.map(post => (
              <div class="row row-color" key={post.id}>
                <div class="col">{post.id}</div>
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
  loadPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  posts: state.postsReducer.posts
});

export default connect(mapStateToProps, { setAlert, loadPosts })(Landing);
