import { useState } from 'react';

import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

import { Container, Content, Row } from './styles';

export const Home = () => {
    const [currentNumber, setCurrentNumber] = useState('0');  // Estado que armazena o número sendo digitado ou resultado
    const [firstNumber, setFirstNumber] = useState('0'); // Estado que armazena o primeiro número antes da operação
    const [operation, setOperation] = useState(''); // Estado que armazena a operação selecionada (+, -, *, /)

    // Limpa os estados da calculadora (zera os valores)
    const handleOnClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    };

    // Adiciona número ou ponto ao número atual
    const handleAddNumber = (number) => {
        setCurrentNumber(prev => {
            if (number === '.' && !prev.includes('.')) return prev + number; // Adiciona ponto, se ainda não existir
            if (prev === '0' && number !== '.') return number; // Substitui o zero inicial
            return prev + number; // Concatena o número
        });
    };

    // Soma os números
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

    // Subtrai os números
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

    // Multiplica os números
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

    // Divide os números
    const handleDivideNumbers = () => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setCurrentNumber('0');
            setOperation('/');
        } else {
            const divide = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(divide));
            setOperation('');
        }
    };

    // Realiza o cálculo de acordo com a operação selecionada
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
                {/* Display de entrada com o número atual */}
                <Input value={currentNumber} />

                {/* Linha 1 */}
                <Row>
                    <Button label="7" onClick={() => handleAddNumber('7')} />
                    <Button label="8" onClick={() => handleAddNumber('8')} />
                    <Button label="9" onClick={() => handleAddNumber('9')} />
                    <Button label="-" onClick={handleMinusNumbers} />
                </Row>

                {/* Linha 2 */}
                <Row>
                    <Button label="4" onClick={() => handleAddNumber('4')} />
                    <Button label="5" onClick={() => handleAddNumber('5')} />
                    <Button label="6" onClick={() => handleAddNumber('6')} />
                    <Button label="+" onClick={handleSumNumbers} />
                </Row>

                {/* Linha 3 */}
                <Row>
                    <Button label="1" onClick={() => handleAddNumber('1')} />
                    <Button label="2" onClick={() => handleAddNumber('2')} />
                    <Button label="3" onClick={() => handleAddNumber('3')} />
                    <Button label="*" onClick={handleMultiplyNumbers} />
                </Row>

                {/* Linha 4 */}
                <Row>
                    <Button label="0" onClick={() => handleAddNumber('0')} />
                    <Button label="." onClick={() => handleAddNumber('.')} />
                    <Button label="/" onClick={handleDivideNumbers} />
                    <Button label="c" onClick={handleOnClear} />
                </Row>

                {/* Linha 5 */}
                <Row>
                    <Button label="=" onClick={handleEquals} />
                </Row>
            </Content>
        </Container>
    );
};
