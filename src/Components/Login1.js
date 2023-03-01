import ".//SignUp1.css";
import "bootstrap/dist/css/bootstrap.min.css";
export function Login1() {
  return (
    <>
      <div className="signup1">
        <div className="container-fluid px-0 py-0">
          <div className="row px-0 py-0">
            <div className="col-6 px-0 py-0 ">
              <img
                src="./farmerselling.avif"
                alt="farmerselling"
                classNameName="image-sign"
                style={{ height: "660px", width: "800px" }}
              />
            </div>
            <div className="col-6">
              <div className="my-5">
                <h1>Login</h1>
              </div>
              <div>
                <form className="text-dark">

                  <div className="mb-2">
                    <label
                      for="email"
                      className="form-label text-dark"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleInputPassword1"
                      className="form-label text-dark"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <button type="button" className="btn btn-success btn-sm">
                    Submit
                  </button>
                  <button type="button" className="btn btn-primary btn-sm ms-2">
                    Register Here!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
