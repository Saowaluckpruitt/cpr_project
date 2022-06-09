function HomePage() {
  return (
    <>
      <div className="flex mt-99 flex-wrap justify-center">
        <button className="cpr-time ">Start CPR</button>
        <video autoplay muted loop className="background-video">
          <source src="video/bgvdo.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
export default HomePage;
