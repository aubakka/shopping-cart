import styled from 'styled-components';

export const StyledTextInput = styled.input`
  background-color: #efeff0;
  border-radius: 5px;
  color: #a1a1a1;
  border: 0;
  outline: 0;
  padding: 5px 13px;
  width: ${({ width }) => width};
`;
