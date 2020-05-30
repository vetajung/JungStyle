import React from "react";
import Card from "./component/card";

import { ShopContainer } from "./component/card/styles";
import Header from "./component/header";

function App() {
  const data = [
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/04/03/1585884760828.jpg",
      "히프나틱",
      "10대,20대",
      "러블리,섹시",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/04/09/1586423812018.jpg",
      "갠소",
      "20대,30대",
      "빅사이즈,심플베이직",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/05/04/1588563909084.jpg",
      "사뿐",
      "10대,20대,30대",
      "슈즈",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/01/23/1579748891347.jpg",
      "베니토",
      "20대,30대",
      "럭셔리·명품,페미닌",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/04/28/1588046831617.jpg",
      "쵸퍼",
      "10대,20대",
      "러블리,섹시",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/03/24/1585013479261.jpg",
      "핫핑",
      "10대,20대",
      "빅사이즈,심플베이직",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/shop/logo/2019/06/1559710017170_mi.jpg",
      "아뜨랑스",
      "20대,30대",
      "러블리,럭셔리·명품",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/04/23/1587607294203.jpg",
      "기프티박스",
      "10대,20대",
      "러블리,모던시크",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/04/03/1585884155892.jpg",
      "세디",
      "10대,20대",
      "러블리,심플베이직",
    ],
    [
      "HOT",
      "https://img.sta1.com/_up/store/2020/05/04/1588563806889.jpg",
      "세이지",
      "20대,30대",
      "모던시크,심플베이직",
    ],
    [
      "1위",
      "https://img.sta1.com/_up/store/2020/03/24/1585013479261.jpg",
      "핫핑",
      "10대,20대",
      "빅사이즈,심플베이직",
    ],
    [
      "2위",
      "https://img.sta1.com/_up/shop/logo/2019/06/1559710017170_mi.jpg",
      "아뜨랑스",
      "20대,30대",
      "러블리,럭셔리·명품",
    ],
    [
      "3위",
      "https://img.sta1.com/_up/shop/logo/2019/02/1550134164211_mi.jpg",
      "육육걸즈",
      "10대,20대",
      "러블리,십대쇼핑몰",
    ],
    [
      "4위",
      "https://img.sta1.com/_up/shop/logo/2019/02/1550650379618_mi.jpg",
      "젝시믹스",
      "10대,20대,30대",
      "피트니스",
    ],
    [
      "5위",
      "https://img.sta1.com/_up/shop/logo/2018/04/1523865657097_mi.jpg",
      "스토리나인",
      "30대",
      "미시스타일,심플베이직",
    ],
    [
      "6위",
      "https://img.sta1.com/_up/shop/logo/2019/05/1558940637449_mi.jpg",
      "리틀블랙",
      "30대",
      "모던시크,미시스타일",
    ],
    [
      "7위",
      "https://img.sta1.com/_up/shop/logo/2017/06/1498200476509_mi.jpg",
      "임블리",
      "20대,30대",
      "러블리,모던시크",
    ],
    [
      "8위",
      "https://img.sta1.com/_up/shop/logo/2019/05/1558940655652_mi.jpg",
      "안나키즈",
      "30대",
      "미시스타일,심플베이직",
    ],
    [
      "9위",
      "https://img.sta1.com/_up/shop/logo/2017/06/1498200350362_mi.jpg",
      "앙투",
      "20대",
      "빅사이즈,심플베이직",
    ],
    [
      "10위",
      "https://img.sta1.com/_up/store/2020/01/23/1579748891347.jpg",
      "베니토",
      "20대,30대",
      "럭셔리·명품,페미닌",
    ],
  ];

  return (
    <div>
      <Header />
      <ShopContainer>
        {data.map((val) => {
          return (
            <Card
              rank={val[0]}
              image={val[1]}
              shopName={val[2]}
              shopTarget={val[3]}
              shopCategory={val[4]}
            />
          );
        })}
      </ShopContainer>
    </div>
  );
}

export default App;
