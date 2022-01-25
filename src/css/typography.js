import { css } from "styled-components";

const typography = css`
  @import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap");

  html {
    font-size: 62.5%;
  }
  body,
  input {
    font-family: "Spartan", sans-serif;
    color: var(--h);
  }
  h1 {
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.6rem;
    letter-spacing: -1px;
  }
  h2 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.2rem;
    letter-spacing: -0.625px;
  }
  h3,
  .h3 {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: -0.8px;
  }
  .secondaryH3 {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.25px;
  }
  .body1 {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.25px;
  }
  .body2 {
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.8rem;
    letter-spacing: -0.229167px;
  }
`;

export default typography;
