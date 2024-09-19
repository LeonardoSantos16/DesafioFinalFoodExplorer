import { ButtonBack } from "../../components/buttonBack";
import { ContainerDetails, ContentFood, ImageFood, InfoFood, EditContent, FoodDescription,FoodTags, BackContainer, EditButton, QuantityAdd, ContentOrder } from "./styles";
import salada from '../../assets/salada.png'
import { Tag } from "../../components/tag";
import { Button } from "../../components/button";
import { HeaderDesktop } from "../../components/header/headerDesktop";
import { Footer } from "../../components/footer";
import useTablet from "../../hooks/useTablet";
import { HeaderMobile } from "../../components/header/headerMobile";
import {Minus, Plus, Receipt} from "@phosphor-icons/react"
import { Header } from "../../components/header";
export function DetailsPrate() {
    // TODO: padronizar o uso do theme em arquivo jsx (definir useTheme ou pelas props)
    const isTablet = useTablet()
    const isAdmin = false
    const iconButton = !isAdmin && isTablet
    return(
        <ContainerDetails>
            <Header />
            <ContentFood>
                <BackContainer>
                    <ButtonBack
                        sizearrow={32} 
                    />
                </BackContainer>
                <EditContent>
                    <ImageFood>
                        <img src={salada} alt="prato" />
                    </ImageFood>
                    <InfoFood>
                        <h1>Salada Ravanello</h1>
                        <FoodDescription>
                            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
                        </FoodDescription>
                        <FoodTags>
                            <Tag text="alface" />
                            <Tag text="cebola" />
                            <Tag text="pão naan" />
                            <Tag text="pepino" />
                            <Tag text="rabanete" />
                            <Tag text="tomate" />
                        </FoodTags>

                        <ContentOrder>
                            {!isAdmin && 
                                <QuantityAdd>
                                    <button> <Minus size="27px" color="#ffffff"/>  </button>
                                    <span>01</span>
                                    <button > <Plus size="27px" color="#ffffff"/> </button>
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