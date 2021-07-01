import React, { useState } from 'react';
import data from './Survivor.json';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

function SurvivorPerk() {
  const perks = data.perks;
  const perksNum = perks.length;
  const items = data.items;
  const itemsNum = items.length;
  const addOns = data.addOns;
  const addOnsNum = addOns.length;
  let [perkData, setPerkData] = useState();
  let [itemData, setItemData] = useState();
  let [addOnData, setAddOnData] = useState();

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

  function SelectPerks(item) {
    if(item === 'perk') {
      let array = getRandom(perksNum, 4);

      setPerkData(array.map((detail, index) => {
        return (
          <div key={index}>
            <div>
              <img className="perkImg" src={perks[detail].url} alt="pic" />
            </div>
            <span className="perkName">{perks[detail].name}</span>
          </div>
        );
      }));
    } else if (item === 'item') {
      let array = getRandom(itemsNum, 1);

      setItemData(array.map((detail, index) => {
        return (
          <div key={index}>
            <div>
              <img className="itemImg" src={items[detail].url} alt="pic" />
            </div>
            <span className="itemName">{items[detail].name}</span>
          </div>
        );
      }));
    } else if(item === 'addon') {
      let array = getRandom(addOnsNum, 2);

      setAddOnData(array.map((detail, index) => {
        return (
          <div key={index}>
            <div>
              <img className="addOnImg" src={addOns[detail].url} alt="pic" />
            </div>
            <span className="addOnName">{addOns[detail].name}</span>
          </div>
        );
      }));
    }
  }
  
  return (
    <Home>
      <Text>
        <h2>Random Perk</h2>
        <PerkButton onClick={() => SelectPerks('perk')}>
          Click
        </PerkButton>
      </Text>
      <Perk>
        {perkData}
      </Perk>
      <Hr />
      <Text>
        <h2>Random Item</h2>
        <PerkButton onClick={() => SelectPerks('item')}>
          Click
        </PerkButton>
      </Text>
      <Item>
        {itemData}
      </Item>
      <Hr />
      <Text>
        <h2>Random AddOns</h2>
        <PerkButton onClick={() => SelectPerks('addon')}>
          Click
        </PerkButton>
      </Text>
      <AddOn>
        {addOnData}
      </AddOn>
    </Home>
  );
}

const Home = styled.div`
  display: block;
  text-align: center;
  font-size: 20px;
  color: #e38842;
  margin-bottom: 3rem;
`;

const Hr = styled.hr`
  text-align: center;
  width: 70rem;
  border-bottom: 1px dashed #ccc;
  background: #999;
  }
`;

const Text = styled.div`
  display: block;
`;

const Perk = styled.div`
  display: inline-box;
  margin-bottom: 2rem;

  .perkName {
    font-size: 1.3rem;
    color: #dcccff;
  }

  .perkImg {
    margin-right: 0.5rem;
    height: 15rem;
  }
`;

const Item = styled.div`
  margin-bottom: 2rem;

  .itemName {
    font-size: 1.3rem;
    color: #dcccff;
  }

  .itemImg {
    height: 14rem;
  }
`;

const AddOn = styled.div`
  display: inline-box;
  margin-bottom: 2rem;

  .addOnName {
    font-size: 1.3rem;
    color: #dcccff;
  }

  .addOnImg {
    height: 14rem;
  }
`;

const PerkButton = styled.button`
  /* 공통 스타일 */
  display: box;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

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