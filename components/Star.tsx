import Image from 'next/image'
import {keyframes} from '@emotion/react'
import styled  from '@emotion/styled'
import { FC } from 'react'

type PropsType = {
    delay: string;
}


const falling = keyframes`
0% {
  transform: translateY(-30vh) rotate(0deg) ;
}
100% {
  transform: translateY(140vh) rotate(360deg) ;
}
`

const StyledStar = styled.div<PropsType>`
-webkit-animation: ${falling} 5s linear infinite;
animation: ${falling} 5s linear infinite;
animation-delay: ${props => props.delay || '0s'};
`

const Star:FC<PropsType> = (props) => {
    return (
        <StyledStar {...props}>
        <Image src='/images/star.png' width={150} height={150}/>
        </StyledStar>
    )
}

export default Star;