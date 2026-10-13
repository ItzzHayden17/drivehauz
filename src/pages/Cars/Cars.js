
import { useEffect, useMemo, useState } from "react";
import "../Cars/Cars.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

const WHATSAPP_NUMBER = "27814385555"; // Replace with your number

const formatPrice = (vehicle) => {
  if (vehicle.price?.display) return vehicle.price.display;

  const amount = vehicle.price?.amount_zar;
  return typeof amount === "number"
    ? new Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
        maximumFractionDigits: 0,
      }).format(amount)
    : "Price on request";
};

const getImages = (vehicle) =>
  [...new Set([vehicle.main_image, ...(vehicle.gallery_images || [])])]
    .filter(Boolean);


const enquireOnWhatsApp = (vehicle) => {
  const message = [
    "Hi Drivehaus,",
    "",
    "I'm interested in this vehicle:",
    "",
    `Vehicle: ${vehicle.title || "Vehicle listing"}`,
    `Price: ${formatPrice(vehicle)}`,
    `Year: ${vehicle.year || "Not specified"}`,
    `Mileage: ${vehicle.mileage?.display || "Please confirm"}`,
    `Transmission: ${vehicle.transmission || "Not specified"}`,
    `Fuel type: ${vehicle.fuel_type || "Not specified"}`,
    `Location: ${vehicle.dealer?.location || "South Africa"}`,
    "",
    vehicle.url ? `View listing: ${vehicle.url}` : "",
    "",
    "Is this vehicle still available?",
    "Please let me know if I can get more information.",
    "",
    "Thank you!"
  ]
    .filter(Boolean)
    .join("\n");

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};


function Cars() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/data/car_data.json", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load the vehicle inventory.");
        }
        return response.json();
      })
      .then((data) => {
        setVehicles(Array.isArray(data.vehicles) ? data.vehicles : []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const filteredVehicles = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = vehicles.filter((vehicle) =>
      [
        vehicle.title,
        vehicle.make,
        vehicle.model,
        vehicle.variant,
        vehicle.year,
        vehicle.transmission,
        vehicle.fuel_type,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query)
    );

    return result.sort((a, b) => {
      const priceA = a.price?.amount_zar ?? Infinity;
      const priceB = b.price?.amount_zar ?? Infinity;

      if (sort === "price-low") return priceA - priceB;
      if (sort === "price-high") return priceB - priceA;
      if (sort === "oldest") return (a.year ?? 0) - (b.year ?? 0);

      return (b.year ?? 0) - (a.year ?? 0);
    });
  }, [vehicles, search, sort]);

  const openGallery = (vehicle) => {
    setSelectedVehicle(vehicle);
    setImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeGallery = () => {
    setSelectedVehicle(null);
    document.body.style.overflow = "";
  };

  const images = selectedVehicle ? getImages(selectedVehicle) : [];

  const changeImage = (direction) => {
    if (!images.length) return;

    setImageIndex((current) =>
      (current + direction + images.length) % images.length
    );
  };

  useEffect(() => {
    if (!selectedVehicle) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") changeImage(1);
      if (event.key === "ArrowLeft") changeImage(-1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVehicle, images.length]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="Cars">
      <Navbar />
      <Banner />

      <main className="showroom">
        <section className="showroom-header">
          <div>
            <span className="showroom-eyebrow">DRIVEHAUS COLLECTION</span>
            <h1>Find your next drive.</h1>
            <p>
              Explore our <strong>{filteredVehicles.length}</strong> available
              vehicles and find the right one for you.
            </p>
          </div>
        </section>

        <section className="inventory-toolbar">
          <label className="vehicle-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search make, model or vehicle..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search vehicles"
            />
          </label>

          <label className="sort-control">
            <span>Sort by</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              style={{ display: "block" }}
            >
              <option value="newest">Newest year</option>
              <option value="oldest">Oldest year</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </section>

        {loading && (
          <div className="showroom-message">Loading our inventory...</div>
        )}

        {!loading && error && (
          <div className="showroom-message showroom-error">
            <h2>Inventory unavailable</h2>
            <p>{error}</p>
            <p>
              Check that <code>public/data/car_data.json</code> exists and
              contains the full JSON object.
            </p>
          </div>
        )}

        {!loading && !error && filteredVehicles.length === 0 && (
          <div className="showroom-message">
            <h2>No vehicles found</h2>
            <p>Try another search term.</p>
          </div>
        )}

        {!loading && !error && filteredVehicles.length > 0 && (
          <section className="vehicle-grid" aria-label="Vehicles for sale">
            {filteredVehicles.map((vehicle) => {
              const photo = getImages(vehicle)[0];

              return (
                <div className="vehicle-card" key={vehicle.listing_id}>
                  <button
                    type="button"
                    className="vehicle-gallery-trigger"
                    onClick={() => openGallery(vehicle)}
                    aria-label={`View photos of ${vehicle.title}`}
                  >
                    <div className="vehicle-photo">
                      {photo ? (
                        <img
                          src={photo}
                          alt={vehicle.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="vehicle-no-photo">
                          Photo unavailable
                        </div>
                      )}

                      <span className="vehicle-condition">
                        {vehicle.condition || "Pre-owned"}
                      </span>

                      {getImages(vehicle).length > 1 && (
                        <span className="vehicle-photo-count">
                          ▧ {getImages(vehicle).length} photos
                        </span>
                      )}

                      <span className="vehicle-view-hint">
                        View gallery ↗
                      </span>
                    </div>
                  </button>

                  <div className="vehicle-card-content">
                    <div className="vehicle-card-heading">
                      <div>
                        <span className="vehicle-make">
                          {[vehicle.year, vehicle.make]
                            .filter(Boolean)
                            .join(" ")}
                        </span>
                        <h2>{vehicle.title || "Vehicle listing"}</h2>
                      </div>
                    </div>

                    <div className="vehicle-price">{formatPrice(vehicle)}</div>

                    <div className="vehicle-specs">
                      <span>
                        <span aria-hidden="true">◷</span>{" "}
                        {vehicle.mileage?.display || "Mileage N/A"}
                      </span>
                      <span>
                        <span aria-hidden="true">⚙</span>{" "}
                        {vehicle.transmission || "Transmission N/A"}
                      </span>
                      <span>
                        <span aria-hidden="true">⛽</span>{" "}
                        {vehicle.fuel_type || "Fuel N/A"}
                      </span>
                    </div>

                    <div className="vehicle-card-footer">
                      <span>
                        {vehicle.dealer?.location || "South Africa"}
                      </span>

                      <button
                        type="button"
                        className="vehicle-arrow"
                        onClick={() => enquireOnWhatsApp(vehicle)}
                        aria-label={`Enquire about ${vehicle.title} on WhatsApp`}
                      >
                        Enquire now <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </main>

      {selectedVehicle && (
        <div
          className="gallery-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo gallery: ${selectedVehicle.title}`}
          onClick={closeGallery}
        >
          <button
            type="button"
            className="gallery-close"
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            ×
          </button>

          <div className="gallery-modal-heading">
            <div>
              <span>DRIVEHAUS COLLECTION</span>
              <h2>{selectedVehicle.title}</h2>
              <p>{formatPrice(selectedVehicle)}</p>
            </div>

            <span className="gallery-counter">
              {images.length ? imageIndex + 1 : 0} / {images.length}
            </span>
          </div>

          <div
            className="gallery-stage"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) =>
              setTouchStart(event.touches[0].clientX)
            }
            onTouchEnd={(event) => {
              if (touchStart === null) return;

              const difference =
                event.changedTouches[0].clientX - touchStart;

              if (Math.abs(difference) > 45) {
                changeImage(difference < 0 ? 1 : -1);
              }

              setTouchStart(null);
            }}
          >
            {images.length > 0 ? (
              <img
                key={images[imageIndex]}
                className="gallery-main-image"
                src={images[imageIndex]}
                alt={`${selectedVehicle.title} photo ${imageIndex + 1}`}
              />
            ) : (
              <p>No photos available for this vehicle.</p>
            )}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-arrow gallery-prev"
                  onClick={() => changeImage(-1)}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="gallery-arrow gallery-next"
                  onClick={() => changeImage(1)}
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className="gallery-bottom">
            <div className="gallery-thumbnails">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={`gallery-thumbnail ${
                    index === imageIndex ? "active" : ""
                  }`}
                  onClick={() => setImageIndex(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === imageIndex ? "true" : undefined}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cars;
