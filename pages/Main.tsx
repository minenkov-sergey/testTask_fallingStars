import styled  from '@emotion/styled'
import Image from 'next/image'
import Star from '../components/Star'
import { FC } from 'react'

type PropsType = {
}

const AppContainer = styled.div`
display:flex;
justify-content: center;
align-items:center;
`;

const StyledImage = styled(Image)`
border-radius:200px ;
z-index: 0;
`;

const StarsBox = styled.div`
z-index: 1;
position: relative;
top:-200px;
width: 60%;
height: auto;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-around;
`;

const Main:FC<PropsType> = () => {
    return(
        <AppContainer>
            <StyledImage src='/images/background.png'
          alt='space'
          layout='fill'
          objectPosition='center'
        />
        <StarsBox>
          <Star delay='2s'/>
          <Star delay='3s'/>
          <Star delay='5s'/>
        </StarsBox>
        </AppContainer>
    )
}

export default Main;