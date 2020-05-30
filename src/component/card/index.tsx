import React from "react";

import * as S from "./styles";
import PlusIcon from "../../svgs/plus-icon";

interface CardProps {
  rank?: string;
  image?: string;
  shopName?: string;
  shopTarget?: string;
  shopCategory?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <S.Card>
      <S.cardRank>{props.rank}</S.cardRank>
      <S.CardContainer>
        <S.CardImage src={props.image}></S.CardImage>
        <S.cardTitle>{props.shopName}</S.cardTitle>
        <S.cardDescription>{props.shopTarget}</S.cardDescription>
        <S.cardDescription>{props.shopCategory}</S.cardDescription>
      </S.CardContainer>
      <S.buttonContainer>
        <S.moreButton>전체상품</S.moreButton>
        <S.moreButton>
          <S.myShopButtonMessage>마이샵</S.myShopButtonMessage>
          <PlusIcon />
        </S.moreButton>
      </S.buttonContainer>
    </S.Card>
  );
};

export default Card;
