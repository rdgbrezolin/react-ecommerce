import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;
    text-decoration: none;

    &:hover {
      transition: 0.2s;
      opacity: 0.7;
    }
  }

  span {
    font-weight: 700;
    font-size: 20px;
    color: #fff;
  }

`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
