import React from 'react';
import data from './Survivor.json';

function SurvivorPerk () {

  let ImgData = data.perks.map((detail, index) => {
    
    return (
      <div key={index}>
        <span>{detail.name}</span>
        <img src={detail.url} />
      </div>
    );
  });
  
  return (
    <>
      {ImgData}
    </>
  );

}

export default SurvivorPerk;