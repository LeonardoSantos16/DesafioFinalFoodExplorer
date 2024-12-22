import { Heart, Minus, Plus, PencilSimple  } from "@phosphor-icons/react"
import { Button } from "../button"
import { CardContainer, FavoriteItem, TitleFood, CardDescription, CardPrice, AddCard, QuantityAdd } from "./styles"
import useTablet from "../../hooks/useTablet"
import { useAuth } from "../../hooks/authContext"
export function Card({ title, price, quantity, image, description, ...rest }) {
    const isTablet = useTablet()
    const isAdmin = useAuth()
    return (
        <CardContainer {...rest}>
            <FavoriteItem>
                {isAdmin ? <PencilSimple size={24} color="#ffffff" /> : <Heart size={24} />}
            </FavoriteItem>
            <img src={image} alt="imagem prato" />
            <TitleFood>
                {title + '>'}
            </TitleFood>
            {!isTablet && <CardDescription>{description}</CardDescription>}
            <CardPrice>R$ {price}</CardPrice>
            {isAdmin &&
            <AddCard>
            <QuantityAdd>
                <button> <Minus size="27px" color="#ffffff" />  </button>
                <span>01</span>
                <button > <Plus size="27px" color="#ffffff" /> </button>
            </QuantityAdd>
            <Button
                bgColor={({ theme }) => theme.COLORS.TINTS_TOMATO_100}
                text="incluir"
            />
        </AddCard>
        }
            
        </CardContainer>
    )

}