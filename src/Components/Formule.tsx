import 'katex/dist/katex.min.css';
import katex from 'katex';


const Formule = () => {
  const html = katex.renderToString('|E| = {\\orange{\\boxed{}} \\over 4 \\pi \\epsilon_0 \\boxed{}^2}');
  
  return (
    <div className='text-6xl'>
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Formule;
