import Image from "next/future/image"
import {styled} from "../styles"
import { HomeContainer, Product } from "./home"

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

const Button = styled('button',
{backgroundColor: '$green500'
}
)

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480}/>
      </Product>
    </HomeContainer>
  )
}
