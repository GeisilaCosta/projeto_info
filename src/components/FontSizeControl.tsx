import React, { useState } from 'react';
import '../App.css';

const FontSizeControl: React.FC = () => {
  const [fontSize, setFontSize] = useState('medium'); // Estado para controlar o tamanho da fonte

  const handleChangeFontSize = (size: string) => {
    switch (size) {
      case 'small':
        document.body.style.fontSize = 'var(--font-size-small)';
        break;
      case 'medium':
        document.body.style.fontSize = 'var(--font-size-medium)';
        break;
      case 'large':
        document.body.style.fontSize = 'var(--font-size-large)';
        break;
      default:
        break;
    }
    setFontSize(size); // Atualiza o estado do tamanho da fonte
  };

  return (
    <div className="font-size-control">
      <button onClick={() => handleChangeFontSize('small')}>A-</button>
      <button onClick={() => handleChangeFontSize('medium')}>A</button>
      <button onClick={() => handleChangeFontSize('large')}>A+</button>
    </div>
  );
};

export default FontSizeControl;
