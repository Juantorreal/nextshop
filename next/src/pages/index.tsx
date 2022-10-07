import Image from "next/future/image"
import {styled} from "../styles"
import { HomeContainer, Product } from "./home"
import {useKeenSlider} from "keen-slider/react"

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe"
import { GetServerSideProps, GetStaticProps } from "next"
import Stripe from "stripe"
import Head from "next/head"
import Link from "next/link"

interface HomeProps {
  products: {
    id:string;
    name: string;
    imageUrl: string;
    price: number;
    
  }[]
}


export default function Home({products}:HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView:3,
      spacing: 48,

    }
  })
  return (
<>
    <Head>
    <title>Home</title>
  </Head>
    <HomeContainer ref={sliderRef} className="keen-slider">
{products.map(product => {
  return (
   <Link key={product.id} href={`/product/${product.id}`}>
    <Product   className="keen-slider__slide">
    <Image alt='' src={camiseta1} width={520} height={480}/>
    <footer>
      <strong>{product.name}</strong>
      <span>{product.price}</span>
    </footer>
  </Product>
  
   </Link>
  )
})}
      
    </HomeContainer>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      

    }
  })
   

  return {
    props: {
      products
    },
    revalidate: 60*60,
  }

}