function Register() {
  return (
    <>
      <div>
        <div className=" register-form ">
          <form class="row g-3 l ">
            <div class="col-md-4">
              <label for="validationDefault01" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefault02" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefault02" class="form-label">
                Phonumber
              </label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefaultUsername" class="form-label">
                Password
              </label>

              <input
                type="password"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
            <div class="col-md-4">
              <label for="validationDefaultUsername" class="form-label">
                Confirm Password
              </label>

              <input
                type="password"
                class="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>

            <div class="col-12">
              <button class="btn  color-gn text-color" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
