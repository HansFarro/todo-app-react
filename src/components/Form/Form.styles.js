import styled from 'styled-components';

export const Forms = styled.form`
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background: white;
`;

export const Button = styled.button`
    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background: white;
    color: #002c61;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background: #002c61;
        color: white;
    }
`;

export const ContainerSel = styled.div`
    margin: 1rem;
    position: relative;
    overflow: hidden;
    &:after{
        font-family: 'Font Awesome 5 Free';
        content: "\f0d7";
        font-weight: 900;
        position: absolute;
        top: 0;
        right: 0;
        padding: 1.2rem;
        background: #002c61;
        cursor: pointer;
        pointer-events: none;
        display: inline-block;
        vertical-align: middle;
    }
`;

export const Select = styled.select`
    padding: 1rem;
`;