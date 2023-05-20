import "katex/dist/katex.min.css";
import katex from "katex";
import MagneticField from "@/Components/Icons/MagneticFieldIcon";
import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

const PanelInfo = () => {
  const html = katex.renderToString("|E| = {q \\over 4 \\pi \\epsilon_0 r^2}");

  return (
    <div className="absolute left-0 z-10 flex h-[90vh] max-w-lg flex-col items-center space-y-5 bg-[#191d32da] p-7 text-white backdrop-blur">
      <h1 className={`${rubik.className} text-2xl text-center font-bold`}>
        Campo Electrico en Distribucion Esferica
      </h1>
      <span className="text-5xl" dangerouslySetInnerHTML={{ __html: html }} />
      <h2 className={`${rubik.className} text-xl font-bold`}>Campo Electrico:</h2>
      <p className={rubik.className}>
        Es una region del espacio que interactua con cargas electricas, su
        representacion, describe el modo en que multiples cuerpos y sistemas de
        naturaleza electrica interactuan con el
      </p>
      <MagneticField className="h-[320px] w-[320px] fill-white" />
    </div>
  );
};

export default PanelInfo;
