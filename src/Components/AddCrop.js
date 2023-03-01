import React from "react";
import "./AddCrop.css";

export function AddCrop() {
  return (
    <>
      <div classNameName="hg2">
        <div>
          <h1>Sell Your Crops Here!!</h1>
        </div>
        <div>
          <form>
            <div className="mb-3 text dark">
              <label for="cropCategory" className="form-label text-dark">
                Crop Category
              </label>
              <select id="cropCategory" class="form-select" aria-label="Default select example">
                <option value="1">Vegetables</option>
                <option value="2">Fruits</option>
                <option value="3">Staples</option>
              </select>
              {/* <input
                type="text"
                className="form-control"
                id="cropCategory"
                placeholder="Enter the crop category"
              /> */}
            </div>
            <div className="mb-3">
              <label for="cropName" className="form-label text-dark">
                Crop Name
              </label>
              <input
                type="text"
                className="form-control"
                id="cropName"
                placeholder="Enter the crop name"
              />
            </div>
            <div className="mb-3">
              <label for="price" className="form-label text-dark">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Enter the crop price"
              />
            </div>
            <div className="mb-3">
              <label for="weight" className="form-label text-dark">
                Weight
              </label>
              <input
                type="text"
                className="form-control"
                id="weight"
                placeholder="Enter the crop weight"
              />
            </div>
            <button type="button" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

/*


  let [cropData, setcropData] = useState({
    name: "",
    category: "",
    price: "",
    weight: "",
  });

  var handleChange = (event) => {
    setcropData({ ...cropData, [event.target.name]: event.target.value });
  };

  var handleSubmit = async (event) => {
    event.preventDefault();

    console.log(cropData);
  };
<div classNameName="row">
          <div classNameName="col-lg-12 bgp1">
            <h1 classNameName="text-center fs-1 bold text-white">Add Crop</h1>
            <Form onSubmit={handleSubmit}>
              <label for="name">Name:</label>
              <br></br>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter Crop Name"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <label for="category">Category:</label>
              <br></br>
              <input
                id="category"
                type="text"
                name="category"
                placeholder="Enter Crop category"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <label for="category">Crop Name:</label>
              <br></br>
              <input
                id="category"
                type="text"
                name="category"
                placeholder="Enter Crop Name"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <label for="price">Price:</label>
              <br></br>
              <input
                id="price"
                type="text"
                name="price"
                placeholder="Enter Crop price per Kg"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <label classNameName="label" for="weight">
                Weight:
              </label>
              <br></br>
              <input
                id="weight"
                type="number"
                name="weight"
                placeholder="Enter Crop weight in Kg"
                onChange={handleChange}
              ></input>
              <br></br>
              <br></br>
              <button classNameName="btn btn-primary" type="button">
                Add Crop
              </button>
            </Form>
          </div>
        </div>


*/
