import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  width: 735px;
  color: #2F2E41;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
    width: 32%;
    margin-bottom: 11px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 12px;
      line-height: 16px;
      color: #333;
      margin: 10px auto;
    }

    > span {
      font-size: 10px;
      line-height: 14px;
      font-weight: 700;
    }

    button {
      width: 100%;
      border: 0;
      overflow: hidden;
      margin-top: 8px;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        transition: 0.2s;
        opacity: 0.7;
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px 6px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        font-size: 12px;
        text-align: center;
        font-weight: bold;
        margin-left: 6px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    width: 100%;

    li {
      width: 80%;
      margin: 5px auto;
    }
  }
`;
