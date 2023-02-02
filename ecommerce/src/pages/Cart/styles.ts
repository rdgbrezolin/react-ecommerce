import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: 0;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        transition: 0.2s;
        opacity: 0.7;
      }
    }

    @media only screen and (max-width: 900px) {
      display: flex;
      flex-direction: column-reverse;
      border-top: 1px solid #999999;
      padding-top: 10px;

      div {
        width: 100%;
        justify-content: end;
      }

      button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    min-height: 70vh;
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #009edd;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: black;
      }
    }

    &:disabled {
      svg {
        color: #ddd;
        cursor: not-allowed;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    thead th {
      display: none;
    }

    tbody td {
      border: 0;
      padding-right: 0;
    }

    strong {
      font-size: 14px;
    }

    span {
      font-size: 14px;
    }

    tbody td:nth-child(2) {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding-left: 0;
      margin-top: 10px;
    }
    tbody td:nth-child(3) {
      display: flex;
      width: 60%;
      padding-left: 0;
    }
    tbody td:nth-child(4) {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-top: -50px;
    }
    tbody td:nth-child(5) {
      display: flex;
      justify-content: flex-end;
      margin-top: -10px;
      width: 100%;
    }

    div {
      width: 100%;
      display: flex;
      input {
        width: 60%;
        height: 20px;
      }
      svg {
        width: 99%;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const EmptyCart = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 100%;
  height: 630px;
  padding: 60px 0;

  p {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
  }

  button {
    margin: 0 auto;
    display: block;
    width: 180px;
    height: 40px;
    border: 0;
    font-weight: bold;
    margin-top: 33px;
  }

  img {
    display: block;
    margin: 50px auto auto;
    width: 169px;
    height: 264px;
  }

  hr {
    width: 55%;
    margin: 0 auto;
    margin-top: -7px;
    border-top: 1px solid black;
    height: 1px;
  }
`;
