import { BannerHome } from "../../components/bannerHome";
import { HeaderMobile } from "../../components/header/headerMobile";
import { ContainerHome, SectionProducts } from "./styles";
import { Card } from "../../components/card";
export function Home(){
    return(
        <ContainerHome>
            <SectionProducts>
                Refeições
            </SectionProducts>

            <Card 
                title="Salada Ravanello"
                price='49,97'
                description='Delicioso folheado de pêssego com folhas de hortelã.'
                quantity='2'
            />
        
        </ContainerHome>
    )
}