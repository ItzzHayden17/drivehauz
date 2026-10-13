
import "../SearchSection/SearchSection.css";

function SearchSection() {
  return (
    <div className="SearchSection">
      <section className="search_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="search_taital">Search Your Best Cars</h1>

              <p className="search_text">
                Find the perfect car for your needs.
              </p>

              <div className="select_box_section">
                <div className="select_box_main">
                  <div className="row">
                    <div className="col-md-3 select-outline">
                      <select className="car-select" defaultValue="">
                        <option value="" disabled>
                          Any Brand
                        </option>
                        <option value="toyota">Toyota</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="bmw">BMW</option>
                      </select>
                    </div>

                    <div className="col-md-3 select-outline">
                      <select className="car-select" defaultValue="">
                        <option value="" disabled>
                          Any Type
                        </option>
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="hatchback">Hatchback</option>
                      </select>
                    </div>

                    <div className="col-md-3 select-outline">
                      <select className="car-select" defaultValue="">
                        <option value="" disabled>
                          Any Price
                        </option>
                        <option value="0-100000">Under R100,000</option>
                        <option value="100000-250000">R100,000–R250,000</option>
                        <option value="250000-500000">R250,000–R500,000</option>
                        <option value="500000+">Over R500,000</option>
                      </select>
                    </div>

                    <div className="col-md-3">
                      <button
                        type="button"
                        className="search_btn"
                        onClick={() => {
                          const selects = document.querySelectorAll(
                            ".SearchSection .car-select"
                          );

                          const [brand, type, price] = Array.from(
                            selects,
                            (select) => select.value
                          );

                          console.log({ brand, type, price });
                        }}
                      >
                        Search Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchSection;