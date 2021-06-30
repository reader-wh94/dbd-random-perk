import React from 'react';
import styled from 'styled-components';
import SurvivorPerk from './SurvivorPerk';

function Home() {
  return (
    <Basic>
      <h1>Dead By DayLight random perk page</h1>
      <br />
      <h2>Random Perk</h2>
      <SurvivorPerk />
    </Basic>
  );
}

const Basic = styled.div`
  .h1 {
    text-align: center;
  }
`;
export default Home;