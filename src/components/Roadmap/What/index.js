import React from "react";
import {
  Section,
  SectionTitle,
  UnorderedList,
  ListItem
} from "../../../styles/styled-components";

import { preRelease } from "../Data/pre_release";
import { preSale } from "../Data/pre_sale";
import { tenPercent } from "../Data/ten_percent";
import { twentyPercent } from "../Data/twenty_percent";
import { fiftyPercent } from "../Data/fifty_percent";


const What = () => {
  return (
    <div> 
    <Section id="pre-release">
      <SectionTitle>0% :: Pre-Release </SectionTitle>
      <UnorderedList>
        {preRelease.map(item => <ListItem key={item.title}>{item.title}</ListItem>)}
      </UnorderedList>
    </Section>
    <Section id="one-percent">
      <SectionTitle>1% :: Pre-Sale  </SectionTitle>
      <UnorderedList>
        {preSale.map(item => <ListItem key={item.title}>{item.title}</ListItem>)}
      </UnorderedList>
    </Section>
    <Section id="ten-percent">
      <SectionTitle>10% :: Public Mint Offering </SectionTitle>
      <UnorderedList>
        {tenPercent.map(item => <ListItem key={item.title}>{item.title}</ListItem>)}
      </UnorderedList>
    </Section>
    <Section id="twenty-five-percent">
      <SectionTitle>25% :: Charity & Development </SectionTitle>
      <UnorderedList>
        {twentyPercent.map(item => <ListItem key={item.title}>{item.title}</ListItem>)}
      </UnorderedList>
    </Section>
    <Section id="fifty-percent">
      <SectionTitle>50% :: Rarity Tools </SectionTitle>
      <UnorderedList>
        {fiftyPercent.map(item => <ListItem key={item.title}>{item.title}</ListItem>)}
      </UnorderedList>
    </Section>
    <Section id="seventy-percent">
      <SectionTitle>70% :: Post release development & giveaways </SectionTitle>
      <UnorderedList>
        {fiftyPercent.map(item => <ListItem key={item.title}>{item.title}</ListItem>)}
      </UnorderedList>
    </Section>
    </div>
  );
};

export default What;
