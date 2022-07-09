import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #222;
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

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
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
    }
  }
`;
