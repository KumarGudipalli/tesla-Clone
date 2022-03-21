import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

function Section({ title, desc, text1, text2, backgroundImage }) {

    return (
        <Wrap bcg={backgroundImage}>
<Fade direction="up">
            <ItemText >
                <h1>{title}</h1>
                <p>
                    {desc}
                </p>
            </ItemText>
            </Fade>    
            <Buttons>
                <Fade direction='up'>
                <ButtonGroup>
                    <LeftButton>

                        {text1}

                    </LeftButton>
                    {text2 &&
                        <RightButton>
                            {text2}
                        </RightButton>
                    }
                </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>





        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size:cover ;
background-position: center;
background-repeat: no-repeat;
background-image: url("/images/model-s.jpg");
background-image: ${props => `url(${props.bcg})`};
`

const ItemText = styled.div`
padding: 15vh;
text-align: center;

 h1{
    font-size: 30px;
}

`

const ButtonGroup = styled.div`
margin-top: 20px;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;

`
const LeftButton = styled.div`
   
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
  color: white;
   padding-top: 10px;
   border-radius: 40px;
   font-size: 16px;
   opacity: 0.65px;
  margin-top: 20%;
   cursor: pointer;
 
`
const RightButton = styled.div`
  color: rgba(23,26,32,0.8);
  height: 40px;
  width: 256px;
background-color: white;
padding-top: 10px;
   border-radius: 40px;
   font-size: 16px;
   margin-top: 20%;
   opacity: 0.65px;
   cursor: pointer;
`

const DownArrow = styled.img`
margin-top: 40px;
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;

`

const Buttons = styled.div`
margin-top: 40px;
`