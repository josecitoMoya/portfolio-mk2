import MernStack from "../assets/mernstack.png";
import { stacks } from "../misc/stacks";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hola, soy Jose Moya
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Un desarrollador Full-Stack, con conocimientos en desarrollo web,
              JavaScript, TypeScript, SEO, y stacks MERN.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Mi viaje
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  Comencé mi camino en el desarrollo web con una gran pasión por
                  crear aplicaciones intuitivas y escalables. Con dominio del
                  stack MERN (MongoDB, Express.js, React y Node.js), he
                  desarrollado proyectos como un sitio web para envios postales,
                  un portal de compras entre otros. Mis proyectos demuestran mi
                  capacidad para integrar potentes soluciones backend con
                  diseños frontend elegantes y fáciles de usar.
                </p>
                <img
                  src={MernStack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                />
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Habilidades & Expriencias
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  {stacks.map((item, i) => (
                    <div
                      className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300"
                      key={i}
                    >
                      <img src={item.image} className="w-10" />
                      <span className="font-semibold">{item.stack}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              Mas sobre mi
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Además de programar, me apasiona aprender nuevas tecnologías y
              mantenerme actualizado con las últimas tendencias en desarrollo
              web. También aporto ideas basadas en JavaScript, desarrollo con el
              stack MERN, WordPress y marketing digital, ayudando a brokers de
              seguros a sumergirse en el mundo de la innovacion web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
