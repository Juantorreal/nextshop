import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../product";

export default function Product() {
    const {query} = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta</h1>
                <span>R$ 79.90</span>
                
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, accusantium neque. Mollitia, dolore iure. Nihil fugiat quisquam fugit quasi molestiae ad! Quasi suscipit, blanditiis possimus obcaecati reprehenderit repellendus debitis ipsam!</p>
            <button>Comprar</button>
            </ProductDetails>
        </ProductContainer>
    )
}