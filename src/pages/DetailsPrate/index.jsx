import { ButtonBack } from "../../components/buttonBack";
import { ContainerDetails, ContentFood, ImageFood, InfoFood, EditContent, FoodDescription,FoodTags,  } from "./styles";
import salada from '../../assets/salada.png'
import { Tag } from "../../components/tag";
import { Button } from "../../components/button";
export function DetailsPrate() {
    // TODO: padronizar o uso do theme em arquivo jsx (definir useTheme ou pelas props)
    return(
        <ContainerDetails>
            <ContentFood>
                <ButtonBack
                    sizearrow={32} 
                />
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
                        <Button
                            color={({ theme }) => theme.COLORS.TINTS_TOMATO_100}
                            text="Editar prato"
                        />
                    </InfoFood>
                </EditContent>
            </ContentFood>
        </ContainerDetails>
    )
}