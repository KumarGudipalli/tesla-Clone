import React from 'react'

import styled from "styled-components";
import Section from './Section';

function Home() {
  return (
    <div>
      <Container>
        <Section
          title="Model-3"
          desc="Order Online for Touchless Delevery"
          backgroundImage="/images/model-3.jpg"
          text1="CUSTOM ORDER"
          text2="EXISTING INVENTORY"

        />
        <Section
          title="Model-Y"
          desc="Order Online for Touchless Delevery"
          backgroundImage="/images/model-y.jpg"
          text1="CUSTOM ORDER"
          text2="EXISTING INVENTORY"
        />
        <Section
          title="Model-S"
          desc="Order Online for Touchless Delevery"
          backgroundImage="/images/model-s.jpg"
          text1="CUSTOM ORDER"
          text2="EXISTING INVENTORY"
        />
        <Section

          title="Model-X"
          desc="Order Online for Touchless Delevery"
          backgroundImage="/images/model-x.jpg"
          text1="CUSTOM ORDER"
          text2="EXISTING INVENTORY"
        />
        <Section
          title="Solar-Panels"
          desc="Lowest Cost Solar Panels in America"
          backgroundImage="/images/solar-panel.jpg"
          text1="ORDER NOW"
          text2="learn more"
        />
        <Section
          title="Solar-Roof"
          desc="Order Online for Touchless Delevery"
          backgroundImage="/images/solar-roof.jpg"
          text1="CUSTOM ORDER"
          text2="EXISTING INVENTORY"
        />
<Section
          title="Accessories"
          backgroundImage="/images/accessories.jpg"
          text1="Shop NOW"
      
        />
      </Container>
    </div>
  )
}

export default Home


const Container = styled.div`
height: 100vh;

`