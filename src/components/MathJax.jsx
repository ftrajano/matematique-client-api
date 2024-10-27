import React, { useEffect } from 'react';

const MathJax = ({ math }) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise && window.MathJax.typesetPromise();
    }
  }, [math]);

  return (
    <div>
      {math}
    </div>
  );
};

export default MathJax;