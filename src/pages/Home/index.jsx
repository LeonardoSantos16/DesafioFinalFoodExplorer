import { BannerHome } from "../../components/bannerHome";
import { HeaderMobile } from "../../components/header/headerMobile";
import { ContainerHome } from "./styles";

export function Home(){
    return(
        <ContainerHome>
            <HeaderMobile />
            <BannerHome />
            <Section>
                Refeições
            </Section>
        </ContainerHome>
    )
}