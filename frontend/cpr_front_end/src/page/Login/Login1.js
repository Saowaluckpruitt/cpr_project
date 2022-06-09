function Login() {
  return (
    <>
      {/* <Navbar />
      <div>
        <ProfilePic />
        <img />

        <LoginDetail />

        <BtnGroup />
      </div> */}

      <div className="login-form-big">
        <div className="login-form-small">
          <img src="..." class="rounded mx-auto d-block mt-5" alt="..." />
          <div class="mb-3 ">
            <label for="formGroupExampleInput" class="form-label text-color">
              User Name
            </label>
            <input
              type="text"
              className="form-control  color-gn bg-dark "
              id="formGroupExampleInput"
              placeholder="User Name"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label text-color">
              Password
            </label>
            <input
              type="text"
              class="form-control color-gn bg-dark"
              id="formGroupExampleInput2"
              placeholder="Password"
            />
          </div>

          <div class="d-grid gap-3 d-md-block ">
            <button class="btn bg-dark text-color color-gn" type="button">
              Login
            </button>
            <button class="btn bg-dark text-color color-gn" type="button">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
