import { Heart, CaretRight, Minus, Plus} from "@phosphor-icons/react"
import { Button } from "../button"
import salada from '../../assets/salada.png'
import { CardContainer, FavoriteItem, TitleFood, CardDescription, CardPrice, AddCard, QuantityAdd } from "./styles"
import useTablet from "../../hooks/useTablet" 
export function Card({title, price, quantity, image, description}){
    const isTablet = useTablet()
    return(
        <CardContainer>
            <FavoriteItem>
                <Heart size={22} />
            </FavoriteItem>
            <img src={salada} alt="imagem prato" />
            <TitleFood>
                {title + '>'} 
            </TitleFood>
            {!isTablet && <CardDescription>{description}</CardDescription>}
            <CardPrice>R$ {price}</CardPrice>
            <AddCard>
                <QuantityAdd>
                    <button> <Minus size="27px" color="#ffffff"/>  </button>
                    <span>01</span>
                    <button > <Plus size="27px" color="#ffffff"/> </button>
                </QuantityAdd>
                <Button 
                    color={({ theme }) => theme.COLORS.TINTS_TOMATO_100}
                    text="incluir"
                />
            </AddCard>
        </CardContainer>
    )

}