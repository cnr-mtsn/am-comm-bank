import styled from "styled-components";
import { device } from "../utils/device";
const TypeSelector = styled.div`
  display: flex;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    justify-content: center;
  }
`;
const AccountPageWrapper = styled.div`
  margin: 3rem 5vw 0 5vw;
`;
const AccountPageHeader = styled.h1`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  @media ${device.mobile} {
    justify-content: space-between;
    flex-direction: column;
  }
  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export { TypeSelector, AccountPageHeader, AccountPageWrapper, Container };
