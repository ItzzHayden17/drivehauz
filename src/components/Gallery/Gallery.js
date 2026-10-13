
import "../Gallery/Gallery.css";

const vehicles = [
  {
    listing_id: "28786176",
    url: "https://www.autotrader.co.za/car-for-sale/audi/rs3/2.5/28786176",
    title: "2016 Audi RS3 Sportback Quattro",
    year: 2016,
    make: "Audi",
    price: "R 498 888",
    condition: "Used",
    mileage: "137 000 km",
    transmission: "Automatic",
    fuel_type: "Petrol",
    location: "Gezina, Pretoria",
    image: "https://img.autotrader.co.za/47214329",
    image_count: 30,
  },
  {
    listing_id: "28783017",
    url: "https://www.autotrader.co.za/car-for-sale/ford/everest/limited/28783017",
    title: "2018 Ford Everest 3.2TDCi 4WD Limited",
    year: 2018,
    make: "Ford",
    price: "R 264 888",
    condition: "Used",
    mileage: "229 000 km",
    transmission: "Automatic",
    fuel_type: "Diesel",
    location: "Gezina, Pretoria",
    image: "https://img.autotrader.co.za/51085961",
    image_count: 24,
  },
  {
    listing_id: "28781797",
    url: "https://www.autotrader.co.za/car-for-sale/baic/beijing-x55/1.5/28781797",
    title: "2023 BAIC Beijing X55 1.5T Dynamic",
    year: 2023,
    make: "BAIC",
    price: "R 294 888",
    condition: "Used",
    mileage: "78 000 km",
    transmission: "Automatic",
    fuel_type: "Petrol",
    location: "Gezina, Pretoria",
    image: "https://img.autotrader.co.za/51028817",
    image_count: 26,
  },
  {
    listing_id: "28786176-2",
    url: "https://www.autotrader.co.za/car-for-sale/audi/rs3/2.5/28786176",
    title: "Audi RS3 Sportback Quattro",
    year: 2016,
    make: "Audi",
    price: "R 498 888",
    condition: "Used",
    mileage: "137 000 km",
    transmission: "Automatic",
    fuel_type: "Petrol",
    location: "Gezina, Pretoria",
    image: "https://img.autotrader.co.za/47214333",
    image_count: 30,
  },
  {
    listing_id: "28783017-2",
    url: "https://www.autotrader.co.za/car-for-sale/ford/everest/limited/28783017",
    title: "Ford Everest 3.2TDCi 4WD Limited",
    year: 2018,
    make: "Ford",
    price: "R 264 888",
    condition: "Used",
    mileage: "229 000 km",
    transmission: "Automatic",
    fuel_type: "Diesel",
    location: "Gezina, Pretoria",
    image: "https://img.autotrader.co.za/51085541",
    image_count: 24,
  },
  {
    listing_id: "28781797-2",
    url: "https://www.autotrader.co.za/car-for-sale/baic/beijing-x55/1.5/28781797",
    title: "BAIC Beijing X55 1.5T Dynamic",
    year: 2023,
    make: "BAIC",
    price: "R 294 888",
    condition: "Used",
    mileage: "78 000 km",
    transmission: "Automatic",
    fuel_type: "Petrol",
    location: "Gezina, Pretoria",
    image: "https://img.autotrader.co.za/51029122",
    image_count: 26,
  },
];

function Gallery() {
  return (
    <section className="Gallery">
      <div className="gallery-section">
        <div className="gallery-container">
          <header className="gallery-header">
            <div>

              <h1>Our best offers.</h1>
              <p>Explore six hand-picked vehicles from our collection.</p>
            </div>


          </header>

          <div className="gallery-vehicle-grid">
            {vehicles.map((vehicle) => (
              <a
                className="gallery-vehicle-card"
                key={vehicle.listing_id}
               //  href={""}
                target="_blank"
                rel="noreferrer"
              >
                <div className="gallery-vehicle-photo">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    loading="lazy"
                  />

                  <span className="gallery-condition">
                    {vehicle.condition}
                  </span>

                  <span className="gallery-photo-count">
                    ▧ {vehicle.image_count} photos
                  </span>
                </div>

                <div className="gallery-vehicle-content">
                  <div className="gallery-vehicle-heading">
                    <span className="gallery-make">
                      {vehicle.year} {vehicle.make}
                    </span>

                    <h2>{vehicle.title}</h2>
                  </div>

                  <div className="gallery-price">
                    {vehicle.price}
                  </div>

                  <div className="gallery-specs">
                    <span>
                      <span aria-hidden="true">◷</span>
                      {vehicle.mileage}
                    </span>

                    <span>
                      <span aria-hidden="true">⚙</span>
                      {vehicle.transmission}
                    </span>

                    <span>
                      <span aria-hidden="true">⛽</span>
                      {vehicle.fuel_type}
                    </span>
                  </div>

                  <div className="gallery-vehicle-footer">
                    <span>{vehicle.location}</span>
                    <span className="gallery-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="gallery-bottom-cta">
            <a href="/cars">Explore the full collection →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;