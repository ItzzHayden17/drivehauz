import "../WhyUs/WhyUs.css";

function WhyUs() {
return (
<div className="WhyUs">
<div className="choose_section layout_padding">
<div className="container">
<div className="row">
<div className="col-md-12">
<h1 className="choose_taital">WHY CHOOSE US</h1>
<p className="choose_subtitle">
Finding your next car should be simple, transparent, and
exciting. We're here to help you make the right choice.
</p>
</div>
</div>

      <div className="choose_section_2">
        <div className="row">
          <div className="col-sm-4">
            <div className="icon_1">
              <img
                src="/images/icon-1.png"
                alt="Quality vehicles"
              />
            </div>
            <h4 className="safety_text">QUALITY VEHICLES</h4>
            <p className="ipsum_text">
              Explore a selection of vehicles to suit different
              lifestyles, preferences, and budgets.
            </p>
          </div>

          <div className="col-sm-4">
            <div className="icon_1">
              <img
                src="/images/icon-2.png"
                alt="Transparent pricing"
              />
            </div>
            <h4 className="safety_text">TRANSPARENT PRICING</h4>
            <p className="ipsum_text">
              Know what each vehicle costs upfront so you can compare
              your options and shop with confidence.
            </p>
          </div>

          <div className="col-sm-4">
            <div className="icon_1">
              <img
                src="/images/icon-3.png"
                alt="Help finding the right car"
              />
            </div>
            <h4 className="safety_text">YOUR NEXT CAR</h4>
            <p className="ipsum_text">
              From practical daily drivers to something more special,
              discover a vehicle that fits your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

);
}

export default WhyUs;