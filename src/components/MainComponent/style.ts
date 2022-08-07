import styled from "styled-components";

export const Container = styled.div`
padding-top:3rem;
  margin-right: 20px;
  margin-left: 20px;
  @media (min-width: 768px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  @media (min-width: 1024px) {
    margin-right: 80px;
    margin-left: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap:wrap;
  }
  @media (min-width: 1440px) {
    margin-right: calc((100vw - 1350px) / 2);
    margin-left: calc((100vw - 1350px) / 2);
  }
`;
