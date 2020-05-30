import React from "react";

import * as S from "./styles";
import PlusIcon from "../../svgs/plus-icon";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const cate = ["SHOP", "ITEM", "SALE", "MORE"];

  return (
    <S.Header>
      <S.HeaderLeft>
        <S.LogoContainer>
          <PlusIcon />
        </S.LogoContainer>
        <S.GenderContainer>
          <S.Gender>WOMEN</S.Gender>
          <S.Gender>MEN</S.Gender>
        </S.GenderContainer>
      </S.HeaderLeft>
      <S.HeaderCenter>
        {cate.map((val: string) => {
          return (
            <S.CategoryBox>
              <S.Category>{val}</S.Category>
            </S.CategoryBox>
          );
        })}
      </S.HeaderCenter>
      <S.HeaderRight>
        <S.LogIn>로그인</S.LogIn>
        <S.SearchContainer>
          <PlusIcon />
          <S.Search>검색어를 입력하세요</S.Search>
        </S.SearchContainer>
      </S.HeaderRight>
    </S.Header>
  );
};

export default Header;
