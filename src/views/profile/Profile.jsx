import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import "./profile.css";
import MostRecent from "../landing/mostrecent.json";

const Profile = () => {
  const { loading, user } = useAuth0();
  const data = MostRecent;

  console.log(data);

  return (
    <div>
      <div className="profile-info">
        <img src={user.picture} alt="profilepic" className="profilepic" />
        <p>Name:{user.name}</p>
        <p>email:{user.email}</p>
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>

      <h2>Posts</h2>

      <div className="grid-container">
        <div class="container most-recent">
          <div class="row head-row">
            <div class="col">#</div>
            <div class="col">Offer</div>
            <div class="col">Need</div>
            <div class="col">flexibility</div>
            <div class="col">action</div>
          </div>
          {data.map((recent, i) => (
            <div class="row row-color" key={i}>
              <div class="col">{recent.id}</div>
              <div class="col">{recent.offer}</div>
              <div class="col">{recent.need}</div>
              <div class="col">{recent.flexibility}</div>
              <div class="col">
                <a href="#">edit</a> <a href="#">delete</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
