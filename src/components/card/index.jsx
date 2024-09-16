import { Heart, CaretRight } from "@phosphor-icons/react"
import { Button } from "../button"
export function Card({title, price, quantity, image, description}){
    return(
        <CardContainer>
            <FavoriteItem>
                <Heart size={22} />
            </FavoriteItem>
            <img src={image} alt="imagem prato" />
            <TitleFood>
                {title + '>'} 
            </TitleFood>
            <CardDescription>{description}</CardDescription>
            <CardPrice>R$ {price}</CardPrice>
            <AddCard>
                <QuantityAdd>
                    <button onClick={ quantityMinus }> <Minus color={theme['purple']}/> </button>
                    <span>{ quantity }</span>
                    <button onClick={ quantityPlus }> <Plus color={theme['purple']}/> </button>
                </QuantityAdd>
                <Button 
                    color={({ theme }) => theme.COLORS.TINTS_TOMATO_100}
                    text="incluir"
                />
            </AddCard>
        </CardContainer>
    )

}