import styled from 'styled-components';

const Container = styled.div`
  & + & {
    margin-top: 16px;
  }
`;

export default Container;
