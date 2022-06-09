function LinkCprAdrennalineTime() {
  return (
    <>
      <div className="bg-big ">
        {/* <LinkCprAdrennalineTime />
        <GroupEtEkgCline /> */}
        <div className=" d-flex justify-content-around mt-5">
          <div className="bg-small text-color mt-5 ">
            <div>
              <h4 className="color-gn">CPR TIME</h4>
              <button type="button" class="btn color-gn text-color">
                2.00 min
              </button>
            </div>
            <div>
              <button type="button" class="btn color-gn text-color">
                Start
              </button>
              <button type="button" class="btn color-gn text-color">
                Stop
              </button>
            </div>
            <button type="button" class="btn color-gn text-color">
              Check Pulse
            </button>
          </div>
          <div className="bg-small text-color mt-5 ">
            <div>
              <h4 className="color-gn">Adrenaline Time</h4>
              <button type="button" class="btn color-gn text-color">
                3.00 min
              </button>
            </div>
            <div>
              <button type="button" class="btn color-gn text-color">
                Start
              </button>
              <button type="button" class="btn color-gn text-color">
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="   d-flex justify-content-around  mt-5">
        <div className="bg-small text-color ">
          <div className="bg-small ">
            <h4 className="">ET-Tube</h4>
          </div>
          <div className="no-et-tube">
            <h5>No.</h5>
            <button type="button" class="btn color-gn text-color">
              Number
            </button>
            <h5>Mark.</h5>
            <button type="button" class="btn color-gn text-color">
              Mark
            </button>
          </div>
        </div>
        <div className="bg-small text-color ">
          <div className="bg-small">
            <h4 className="">C-line</h4>
          </div>
          <div className="no-et-tube">
            <h5>No.</h5>
            <button type="button" class="btn color-gn text-color">
              Number
            </button>
            <h5>Mark.</h5>
            <button type="button" class="btn color-gn text-color">
              Mark
            </button>
          </div>
        </div>
        <div className="bg-small text-color ">
          <div className="bg-small">
            <h4 className="">Ekg</h4>
          </div>
          <div className="no-et-tube">
            <h5>Ekg</h5>
            <button type="button" class="btn color-gn text-color">
              Number
            </button>
            <h5>Defibulation</h5>
            <button type="button" class="btn color-gn text-color">
              Mark
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LinkCprAdrennalineTime;
