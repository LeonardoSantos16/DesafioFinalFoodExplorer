import { ButtonBack } from "../../components/buttonBack";
import { ContainerDetails, ContentFood, ImageFood, InfoFood, EditContent, FoodDescription, FoodTags, BackContainer, EditButton, QuantityAdd, ContentOrder } from "./styles";
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

export function DetailsPrate() {
    // TODO: padronizar o uso do theme em arquivo jsx (definir useTheme ou pelas props)
    // TODO: modificação do admin
    const isTablet = useTablet()
    const isAdmin = false
    const iconButton = !isAdmin && isTablet
    const Navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState({})
    const [ingredients, setIngredients] = useState([])
    const foodIcon = `${api.defaults.baseURL}/files/${data.food_icon}`;
    function handleBack() {
        Navigate(-1);
    }

    useEffect(() => {
        async function fetchPrate() {
            console.log("Parâmetros:", params);
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
                            {!isAdmin &&
                                <QuantityAdd>
                                    <button> <Minus size="27px" color="#ffffff" />  </button>
                                    <span>01</span>
                                    <button > <Plus size="27px" color="#ffffff" /> </button>
                                </QuantityAdd>
                            }
                            <EditButton>
                                <Button
                                    icon={iconButton ? Receipt : null}

                                    color={({ theme }) => theme.COLORS.TINTS_TOMATO_100}
                                    text="Editar prato"
                                />
                            </EditButton>
                            :


                        </ContentOrder>


                    </InfoFood>
                </EditContent>
            </ContentFood>
            <Footer />
        </ContainerDetails>
    )
}