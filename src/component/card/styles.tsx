import styled from "styled-components";

export const ShopContainer = styled.div`
  padding: 10px;
  width: 70%px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

export const Card = styled.div`
  margin: 3px;
  border: 1px solid black;
  width: 230px;
  height: 300px;
  cursor: pointer;
  letter-spacing: -0.8px;
`;

export const cardRank = styled.div`
  color: gray;
  margin-bottom: 10px;
  padding-top: 12px;
  padding-left: 12px;
  font-style: normal;
  font-size: 12px;
  color: rgb(115, 223, 242);
`;

export const CardContainer = styled.div`
  width: 230px;
  height: 225px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  margin-top: 10px;
  width: 90px;
  height: 90px;
  border-radius: 100%;
`;

export const cardTitle = styled.div`
  padding: 18px 0 12px;
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  overflow: hidden;
  margin: 0 auto;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const cardDescription = styled.div`
  color: #909090;
  font-style: normal;
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const buttonContainer = styled.div`
  margin-top: 7px;
  width: 230px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const moreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px solid #707070;
  flex: 1;
  font-size: 11px;
  color: #909090;
  line-height: 40px;
  text-align: center;
`;

export const myShopButtonMessage = styled.div`
  font-size: 11px;
  display: inline;
  color: #909090;
`;
