import React from 'react';
import styled from 'styled-components';
import SurvivorPerk from './SurvivorPerk';

function Home() {
  return (
    <Basic>
      <h1>Dead By Daylight random perk</h1>
      <br />
      <SurvivorPerk />
    </Basic>
  );
}

const Basic = styled.div`
  text-align: center;
`;
export default Home;