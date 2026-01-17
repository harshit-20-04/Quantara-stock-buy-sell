import React from "react";

function Team() {
  return (
    <div className="p-3 mx-5 my-2">
      <h3 className="mb-3 pb-2 text-center">People</h3>
      <div className="row mb-3 my-5 ml-5 pl-5">
        <div className="col row">
          <div className="col text-center">
            <img
              src="media/images/harshitsharma.jpg"
              className="rounded-circle pl-5 pb-3"
              alt="Owner image"
              style={{ height: "285px", width: "300px" }}
            />
            <h5 className="card-title pt-2 fs-5 text-center">Harshit Sharma</h5>
            <p className="fs-6">Founder, CEO</p>
          </div>
          <div className="col">
            <div className="card-body">
              <p className="card-text">
                Harshit Sharma founded Quantara with a vision to make technology
                and finance more accessible, transparent, and intelligent for
                everyone.
              </p>
              <p className="card-text">
                A passionate developer and problem solver, he started his
                journey by exploring the depths of data structures, algorithms,
                and full-stack development, turning his curiosity into creation.
              </p>
              <p className="card-text">
                Through Quantara, he aims to bridge the gap between innovation
                and simplicity, empowering users with smarter, data-driven
                solutions.
              </p>
              <p className="card-text">
                When he’s not building or experimenting with new ideas, you’ll
                find him diving into machine learning projects or exploring
                creative tech concepts that challenge the ordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
