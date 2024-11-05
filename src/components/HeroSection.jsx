import migrationImage from "../assets/migration.jpg"; // Import the image
import migrationImage2 from "../assets/migration2.jpg"; // Import the image

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Protection and Solutions
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for Forced & Climate Induced Displacement and Migration (PSDM)
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Committed to supporting individuals displaced by conflict, persecution, and climate change. We provide protection services, advocate for policy reforms, and work with partners to help vulnerable populations in Somalia and beyond rebuild their lives with dignity and resilience.
      </p>
      <div className="flex mt-10 justify-center">
        <img
          src={migrationImage} // Use the image instead of video
          alt="Migration"
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
        <img
          src={migrationImage2} // Use the image instead of video
          alt="Migration"
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default HeroSection;
