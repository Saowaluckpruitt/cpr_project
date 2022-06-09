import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="bg-black sticky top-0">
        {/* desktop */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex flex-wrap justify-between grow">
          <div className="flex-shrink-0">
            <img
              src="pic/logoEkg.png"
              className="rounded float-start mt-2"
              width="100"
              height="50"
              alt="logoCpr"
            />
          </div>

          <div className="mt-8 ">
            <a className="a-link " href="#">
              Home
            </a>
            <a className="a-link " href="#">
              Medicine
            </a>
            <a className="a-link " href="#">
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
