import hero from "../assets/JM.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import { networks } from "../misc/Networks";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hola, <br />
              soy Jose <span className="text-red-500">Moya</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Full Stack Developer</p>
            <p className="mb-4">
              Soy una persona proactiva, organizada y responsable, con
              excelentes habilidades interpersonales y una fuerte capacidad para
              el trabajo en equipo. Mi experiencia abarca roles variados en
              diferentes rubros. Mi motivación se centra en la innovación, la
              optimización de procesos y la mejora continua, siempre buscando
              aportar valor a la organización y alcanzar resultados
              sobresalientes.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="../public/CV joseMoya (Spanish version).pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                Descargar CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="" className="lg:h-[90vh] h-96 rounded-full" />
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        {networks.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <a href={item.path} className="p-2 text-7xl" target="_blank">
              {item.icon}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
