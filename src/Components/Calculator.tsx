import Buttons from "./Buttons";
import Formule from "./Formule";

const Calculator = () => {
  return (
    <div className="mt-12 h-max w-max rounded-2xl bg-gray-600 p-8 text-center">
      <section className="grid h-28 place-content-center rounded-lg bg-white ">
        <Formule />
      </section>
      <section className="mt-5 grid grid-cols-3 gap-8">
        {[...Array(9)].map((x, i) => (
          <Buttons value={i + 1} />
        ))}
        <button className="text-4xl">C</button>
        <Buttons value={0} />
        <button className="text-4xl">del</button>
        <button className="text-4xl">flecha izq</button>
        <button className="text-4xl"></button>
        <button className="text-4xl">flecha der</button>
      </section>
    </div>
  );
};

export default Calculator;
