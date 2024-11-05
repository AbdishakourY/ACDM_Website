import logo from "../assets/logo.png";
import file from "../assets/file.png";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <div className="text-center pb-28">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          About{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Us
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-2/3 px-4 py-2">
          <div className="bg-orange-100 rounded-md p-6 text-xl">
            <p>
              PSDM (Protection Services for Displacement and Migration) is a
              non-governmental organization dedicated to providing essential
              protection services for forcibly displaced individuals and
              migrants across Somalia and the East and Horn of Africa. We
              focus on community-driven initiatives, child protection, legal
              advocacy, and responses to gender-based violence, with a mission
              to promote self-reliance and dignity for all.
            </p>
            <div className="flex items-center justify-center mt-4">
              <img className="h-20 w-25 mx-auto" src={file} alt="Logo" />
            </div>
            <p className="mt-4">
              Our work involves collaborating with local authorities,
              humanitarian actors, and affected populations to address the
              challenges posed by forced displacement and climate-induced
              migration, while advocating for policies that safeguard the
              rights and well-being of vulnerable populations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
