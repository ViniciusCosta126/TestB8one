import styled from "styled-components";

interface SpanProps {
  is_favorite: boolean;
}
export const Container = styled.div`
  background: #ffffff;
  border-radius: 8px;
  height: auto;
  padding: 20px;
  width: 100%;
  &:hover {
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  }
  @media (min-width: 1024px) {
    width: 30%;
    max-width: 305px;
    padding: 32px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
  > img {
    display: block;
    margin: 0 auto;
  }
`;
export const HeartWish = styled.span<SpanProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 48px;
  height: 48px;
  background-color: ${(props) => (props.is_favorite ? "#DA4B4F" : "#F2F3F6")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
  >svg{
    font-size: 24px;
  }
  > svg path {
    transition: all 0.2s ease-out;
    fill: ${(props) => (props.is_favorite ? "#fff" : "#F2F3F6")};
    stroke: ${(props) => (props.is_favorite ? "#fff" : "#000")};
  }
  &:hover {
    background-color: ${(props) => (props.is_favorite ? "#C22539" : "#fee5ec")};
    transition: all 0.2s ease-in;
    > svg path {
      transition: all 0.2s ease-in;
      fill: ${(props) => (props.is_favorite ? "#fff" : "#fee5ec")};
      stroke: ${(props) =>
        props.is_favorite ? "#fff" : "rgba(243, 21, 27, 1)"};
    }
  }
`;

export const ContentContainer = styled.div`
  > h2 {
    font-size: 14px;
    line-height: 20px;
    color: #1c1c1c;
    margin-bottom: 24px;
  }
  .value-original {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.005em;
    text-decoration-line: line-through;
    color: #b5b5b6;
    margin-bottom: 4px;
  }
  .discount-value {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.005em;
    color: #da4b4f;
    margin-bottom: 4px;
  }
  .installments {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.005em;
    color: #848587;
    margin-bottom: 32px;
    > span {
      color: rgba(28, 28, 28, 1);
      font-weight: 600;
    }
  }
`;

interface ButtonProps {
  is_add: boolean;
}

export const ButtonCard = styled.button<ButtonProps>`
  background-color: ${(props) => (props.is_add ? "#A3F9B9" : "#40b25c")};
  border-radius: 5px;
  padding: 12px 24px;
  width: 100%;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-transform: uppercase;
  color: ${(props) => (props.is_add ? "#1C1C1C" : "#fff")};
  transition: all 0.25s ease-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.is_add ? "#A3F9B9" : "#1c6c3e")};
    transition: all 0.25s ease-in;
  }
  > img {
    display: ${(props) => (props.is_add ? "block" : "none")};
    margin-right: 16px;
  }
`;
