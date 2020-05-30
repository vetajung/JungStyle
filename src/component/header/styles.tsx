import styled from "styled-components";
import { scryptSync } from "crypto";

export const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const HeaderLeft = styled.div`
  border: 0.1px solid gray;
  height: 100%;
  width: 33.33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const HeaderCenter = styled.div`
  border: 0.1px solid gray;
  height: 100%;
  width: 33.33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const HeaderRight = styled.div`
  border: 0.1px solid gray;
  height: 100%;
  width: 33.33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const LogoContainer = styled.div`
  border: 0.1px solid black;
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const GenderContainer = styled.div`
  border: 0.1px solid black;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Gender = styled.div`
  border: 0.1px solid blue;
  padding: 0 5px;
  font-family: DINPro_M;
  font-size: 12px;
  color: #303030;
  display: flex;
  align-items: center;
`;

export const CategoryBox = styled.div`
  border: 0.1px solid blue;
  width: 90px;
  padding: 0 5px;
  font-family: DINPro_M;
  font-size: 12px;
  color: #303030;
  display: flex;
  justify-content: center;
`;

export const Category = styled.div`
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
  border: 0.1px solid red;
  display: flex;
  align-items: center;
`;

export const LogIn = styled.div`
  padding: 10px;
  font-size: 12px;
  border: 0.1px solid black;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 180px;
  font-size: 14px;
  font-weight: bold;
  border: 0.1px solid black;
  display: flex;
  align-items: center;
`;

export const Search = styled.div`
  padding-left: 10px;
  font-size: 12px;
  font-weight: bold;
  color: gray;
  display: flex;
  align-items: center;
`;
