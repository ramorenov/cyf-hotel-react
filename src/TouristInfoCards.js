import React from "react";

const TouristInfoCards = () => {
  return (
    <div class="card-deck">
      <div className="card">
        <img
          src="https://www.visitbritain.com/sites/default/files/styles/consumer_campaigns_hero_mobile/public/paragraphs_bundles/hero/hero_image_destination_q2_glasgow_3_0.jpg?itok=TF0sdCEF"
          alt="Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 class="card-title">Glasgow</h5>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.visitmanchester.com/imageresizer/?image=%2fdmsimgs%2fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"
          alt="manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 class="card-title">Manchester</h5>
          <a href="visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg"
          alt="london"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 class="card-title">London</h5>
          <a href="visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
