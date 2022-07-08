import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 74px;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 16px;

    background-color: #FFF;
    box-shadow: (0 4px 10px rgba(0, 0, 0, 0.04));
    border: none;
    border-radius: 25px;
    outline: 0;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
