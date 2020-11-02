import styled from "styled-components";

const TypeSelector = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const AccountPageWrapper = styled.div`
  margin-left: 15vw;
  margin-right: 15vw;
`;
const AccountPageHeader = styled.h1`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
`;

export { TypeSelector, AccountPageHeader, AccountPageWrapper };
