import React, { useState, useEffect } from "react";
import "./profile.css";
import { connect } from "react-redux";

// import { setAlert } from "../../actions"
// import { setAlert } from "../../actions"
// import { setAlert } from "../../actions"

const Profile = () => {
  const [formData, setFormData] = useState({});

  const {} = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  {
    /* {this.state.cities.map((city, i) => (
              <option key={i}>{city}</option>
            ))} */
  }

console.log(formData)

  return (
    
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <div class='form-group'>
          <label for='exampleFormControlSelect1'>Enter City</label>
          <select
            class='form-control'
            id='exampleFormControlSelect1'
            value=''
            onChange={e => onChange(e)}>
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
          </select>
        </div>
        <div>
          <input
            type='email'
            placeholder='Email'
            name='email'
            value=''
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='8'
            value=''
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type='submit' value='Login' />
      </form>

      <h2>Posts</h2>

      <div className='grid-container'>
        <div class='container most-recent'>
          <div class='row head-row'>
            <div class='col'>#</div>
            <div class='col'>Offer</div>
            <div class='col'>Need</div>
            <div class='col'>flexibility</div>
            <div class='col'>action</div>
          </div>
          {/* {data.map((recent, i) => (
            <div class="row row-color" key={i}>
              <div class="col">{recent.id}</div>
              <div class="col">{recent.offer}</div>
              <div class="col">{recent.need}</div>
              <div class="col">{recent.flexibility}</div>
              <div class="col">
                <a href="#">edit</a> <a href="#">delete</a>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.postsReducer,
  user: state.profileReducer
});

export default connect(mapStateToProps, {})(Profile);
