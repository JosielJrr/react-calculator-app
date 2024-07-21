import Input from './components/input';
import Button from './components/Button';
import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  // Função para resetar currentNumber e outros estados
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  // Função para adicionar um número ou ponto decimal ao currentNumber
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => {
      if (number === '.' && !prev.includes('.')) {
        return prev + number; // Adiciona o ponto decimal se ainda não existir
      } else if (prev === '0' && number !== '.') {
        return number; // Substitui o '0' inicial pelo número clicado
      } else {
        return prev + number; // Concatena o número ao currentNumber
      }
    });
  };

  // Função para somar números
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = parseFloat(firstNumber) + parseFloat(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  };

  // Função para subtrair números
  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const subtract = parseFloat(firstNumber) - parseFloat(currentNumber);
      setCurrentNumber(String(subtract));
      setOperation('');
    }
  };

  // Função para multiplicar números
  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const multiply = parseFloat(firstNumber) * parseFloat(currentNumber);
      setCurrentNumber(String(multiply));
      setOperation('');
    }
  };

  // Função para dividir números
  const handleDivideNumbers = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
      setOperation('');
    }
  }

  // Função para calcular o resultado com base na operação selecionada
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="*" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="c" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
