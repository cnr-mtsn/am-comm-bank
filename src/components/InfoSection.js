import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const StyledInfo = styled(motion.div)`
  padding: 0 1rem 0 2rem;
  max-width: 80vw;
  h2 {
    color: ${props => props.theme.colors.blue};
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  p {
    font-size: 1.1rem;
  }
  ul {
    margin: 1rem 0;
  }
  li {
    padding: 0.3rem;
    list-style: inside;
    line-height: 15pt;
  }
  .info-section {
    margin-top: 2.5rem;
  }
`;
const listVariants = {
  in: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
  out: {
    opacity: 0,
  },
};
const itemVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default function InfoSection({ type }) {
  return (
    <StyledInfo>
      <div className='info-section'>
        {type.header && <h2>{type.header}</h2>}

        {type.description && (
          <p>
            {type.description}{" "}
            {type.link && <a href={type.link.url}>{type.link.text}</a>}
          </p>
        )}

        {type.info && (
          <motion.ul variants={listVariants} initial='out' animate='in'>
            {type.info.map(value => (
              <motion.li variants={itemVariants}>{value}</motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </StyledInfo>
  );
}
