import React, {  useState } from 'react';
import data from './Survivor.json';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

function SurvivorPerk () {
  const perks = data.perks;
  const perksNum = perks.length;
  let [imgData, setImgData] = useState();

  function getRandom(totalIndex, selectNumber) {
    let randomArray = [];
    for (let i = 0; i < selectNumber; i++) {
      let randomNumber = Math.floor(Math.random() * totalIndex);
      if(randomArray.indexOf(randomNumber) === -1) {
        randomArray.push(randomNumber);
      } else {
        i--;
      }
    }
    return randomArray;
  }

  function SelectPerks() {
    let array = getRandom(perksNum, 4);
    console.log(array);

    setImgData(array.map((detail, index) => {
      return (
        <div key={index}>
          <img className="img" src={perks[detail].url} alt="pic" />
          <span className="perkName">{perks[detail].name}</span>
        </div>
      );
    }));
  }
  
  return (
    <Card>
      <PerkButton onClick={SelectPerks}>
        Click
      </PerkButton>
      {imgData}
    </Card>
  );

}

const Card = styled.div`
  display: flex;
  float: left;

  .perkName {
    font-size: 20px;
    color: #d9d9d9;
  }
  .img {
    height: 85%;
  }
`;

const PerkButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2rem;
  font-size: 1.5rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: ${lighten(0.1, '#228be6')};
  }
  &:active {
    background: ${darken(0.1, '#228be6')};
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

export default SurvivorPerk;