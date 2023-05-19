import "katex/dist/katex.min.css";
import katex from "katex";
import MagneticField from "@/Components/Icons/MagneticFieldIcon"

const PanelInfo = () => {
  const html = katex.renderToString("|E| = {q \\over 4 \\pi \\epsilon_0 r^2}");

  return (
    <div className="absolute left-0 bg-slate-300 max-w-lg h-screen px-5 py-20 z-10">
      <h1>Campo Electrico en Distribucion Esferica</h1>
      <span dangerouslySetInnerHTML={{ __html: html }} />
      <h2>Campo Electrico:</h2>
      <p>
        Es una region del espacio que interactua con cargas electricas, su
        representacion, describe el modo en que multiples cuerpos y sistemas de
        naturaleza electrica interactuan con el
      </p>
      <MagneticField className="w-[200px] h-[200px] fill-white"/>
    </div>
  );
};

export default PanelInfo;
