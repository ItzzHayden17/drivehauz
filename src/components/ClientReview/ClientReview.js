import "../ClientReview/ClientReview.css";
import { useState } from "react";

const reviews = [
{
name: "Michael T.",
initials: "MT",
rating: 5,
text: "Finding the right car can be overwhelming, but having the options clearly presented made comparing vehicles so much easier. A great starting point for my search.",
vehicle: "Vehicle shopping experience",
},
{
name: "Sarah M.",
initials: "SM",
rating: 5,
text: "I wanted something reliable that suited my budget. The straightforward listings made it easier to explore different options and narrow down what I was looking for.",
vehicle: "Finding the right vehicle",
},
{
name: "Daniel K.",
initials: "DK",
rating: 5,
text: "A clean, easy-to-use platform for browsing cars. I could check the details, compare prices, and focus on the vehicles that interested me.",
vehicle: "Browsing vehicle listings",
},
];

function ClientReview() {
const [activeIndex, setActiveIndex] = useState(0);

const previousReview = () => {
setActiveIndex((current) =>
current === 0 ? reviews.length - 1 : current - 1
);
};

const nextReview = () => {
setActiveIndex((current) =>
current === reviews.length - 1 ? 0 : current + 1
);
};

const review = reviews[activeIndex];

return (
<div className="ClientReview">
<section className="client_section layout_padding">
<div className="container">
<div className="row">
<div className="col-md-12">
<p className="client_eyebrow">CUSTOMER EXPERIENCES</p>
<h2 className="client_taital">What Our Customers Say</h2>
<p className="client_subtitle">
Every great car journey starts with finding the right vehicle.
</p>
</div>
</div>

      <div className="client_section_2">
        <div className="client_review_card">
          <div className="client_review_top">
            <div className="client_img">
              <div className="client_initials">
                {review.initials}
              </div>
            </div>

            <div className="client_review_identity">
              <h3 className="moark_text">{review.name}</h3>
              <p className="client_vehicle">{review.vehicle}</p>
            </div>

            <div
              className="client_rating"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {"★".repeat(review.rating)}
            </div>
          </div>

          <div className="quick_icon" aria-hidden="true">
            “
          </div>

          <p className="client_text">{review.text}</p>

          <div className="client_review_footer">
            <span className="client_review_count">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>

            <div className="client_review_controls">
              <button
                type="button"
                className="client_control"
                onClick={previousReview}
                aria-label="Previous review"
              >
                &#8592;
              </button>

              <button
                type="button"
                className="client_control"
                onClick={nextReview}
                aria-label="Next review"
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>

        <div className="client_review_dots">
          {reviews.map((item, index) => (
            <button
              key={item.initials}
              type="button"
              className={`client_dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View review ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
</div>

);
}

export default ClientReview;