import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid #5061FC;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
  `;

export const ListHeader = styled.header`
  margin-top: 24px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

      span {
        margin-right: 8px;
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
      }

      img.arrow {
        transform: ${({ orderBy }) => (orderBy === 'ASC' ? 'rotate(0deg)' : 'rotate(180deg)')};
        transition: transform 0.2s ease-in;
      }
    }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  margin-top: 8px;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 4px;

        margin-left: 8px;
        padding: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
