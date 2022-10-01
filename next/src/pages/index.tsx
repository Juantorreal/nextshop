import Image from "next/future/image"
import {styled} from "../styles"
import { HomeContainer, Product } from "./home"
import {useKeenSlider} from "keen-slider/react"

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import 'keen-slider/keen-slider.min.css'

const Button = styled('button',
{backgroundColor: '$green500'
}
)

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView:3,
      spacing: 48,

    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image alt='' src={camiseta1} width={520} height={480}/>
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt='' src={camiseta2} width={520} height={480}/>
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image alt='' src={camiseta3} width={520} height={480}/>
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 80,00</span>
        </footer>
      </Product>

      
    </HomeContainer>
  )
}
