import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
        width: 100%;
        height: 100%;
        padding: 0 12px;
        border: none;
        background-color: #AAAAFF;
        color: #FFF;
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        text-align: end;
        box-sizing: border-box;
    }

    @media (max-width: 480px) {
        height: 60px;

        input {
        font-size: 20px;
        padding: 0 10px;
        }
    }
`;
