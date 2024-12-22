import { ButtonBack } from "../../components/buttonBack";
import { ContainerDetails, ContentFood, ImageFood, InfoFood, EditContent, FoodDescription, FoodTags, BackContainer, EditButton, QuantityAdd, ContentOrder, IncludeContainer } from "./styles";
import salada from '../../assets/salada.png'
import { Tag } from "../../components/tag";
import { Button } from "../../components/button";
import { HeaderDesktop } from "../../components/header/headerDesktop";
import { Footer } from "../../components/footer";
import useTablet from "../../hooks/useTablet";
import { HeaderMobile } from "../../components/header/headerMobile";
import { Minus, Plus, Receipt } from "@phosphor-icons/react"
import { Header } from "../../components/header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/authContext";
export function DetailsPrate() {
    const isTablet = useTablet()

    const isAdmin = useAuth()
    const navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState({})
    const [ingredients, setIngredients] = useState([])
    const foodIcon = `${api.defaults.baseURL}/files/${data.food_icon}`;
    function handleBack() {
        navigate(-1);
    }

    function handleNavigatUpdate(id) {
        navigate(`/update/${id}`)
    }

    const ButtonsCustomer = () => {
        return(
            <>
                <QuantityAdd>
                    <button> <Minus size="27px" color="#ffffff" />  </button>
                    <span>01</span>
                    <button > <Plus size="27px" color="#ffffff" /> </button>
                </QuantityAdd>
                <IncludeContainer>
                    <Button 
                        icon={isTablet ? Receipt : null}
                        bgColor={({ theme }) => theme.COLORS.TINTS_TOMATO_100}
                        text={isTablet ? 'pedir ∙ R$ 25,00' : 'incluir ∙ R$ 25,00'}
                    />
                </IncludeContainer>
            </>
        )
    }

    const ButtonAdmin = () => {
        return(
        <EditButton onClick={() => handleNavigatUpdate(params.id)}>
            <Button
                bgColor={({ theme }) => theme.COLORS.TINTS_TOMATO_100}
                text="Editar prato"
                />
        </EditButton>
        )
    }

    useEffect(() => {
        async function fetchPrate() {
            const response = await api.get(`/food/${params.id}`)
            setData(response.data)
            const ingredientNames = response.data.foodIngredient.map(ingredient => ingredient.name);
            setIngredients(ingredientNames)
        }
        fetchPrate();
    }, [])

    return (
        <ContainerDetails>
            <Header />
            <ContentFood>
                <BackContainer>
                    <ButtonBack
                        sizearrow={32} onClick={handleBack}
                    />
                </BackContainer>
                <EditContent>
                    <ImageFood>
                        <img src={foodIcon} alt="prato" />
                    </ImageFood>
                    <InfoFood>
                        <h1>{data.title}</h1>
                        <FoodDescription>
                            {data.description}
                        </FoodDescription>
                        <FoodTags>

                            {ingredients.map((ingredient, index) => (
                                <Tag key={String(index)}
                                    text={ingredient} />
                            ))}
                        </FoodTags>

                        <ContentOrder>
                            {isAdmin ?
                                <ButtonAdmin />
                                :
                                <ButtonsCustomer />
                            }
                        </ContentOrder>
                    </InfoFood>
                </EditContent>
            </ContentFood>
            <Footer />
        </ContainerDetails>
    )
}