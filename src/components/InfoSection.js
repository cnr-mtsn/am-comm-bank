import React from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
  h2 {
    color: ${props => props.theme.colors.blue};
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  p {
    margin: 0;
    padding: 0;
  }
  li {
    padding: 0.2rem;
  }
  .info-section {
    margin-top: 2.5rem;
  }
`;

export default function InfoSection({ type }) {
  return (
    <StyledInfo>
      <div className='info-section'>
        {type.header && <h2>{type.header}</h2>}

        {type.description && <p>{type.description}</p>}

        {type.info && (
          <ul>
            {type.info.map(value => (
              <li>{value}</li>
            ))}
          </ul>
        )}
      </div>
    </StyledInfo>
  );
}
