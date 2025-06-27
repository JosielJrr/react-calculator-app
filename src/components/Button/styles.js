import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 1.25rem;
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFF;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    flex: 1;
    min-width: 0;

    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 0.75rem;
    }
`;
