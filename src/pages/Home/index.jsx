import { BannerHome } from "../../components/bannerHome";
import { HeaderMobile } from "../../components/header/headerMobile";
import { ContainerHome, SectionProducts, CarouselContent, SectionCarousel } from "./styles";
import { Card } from "../../components/card";
import { Carousels } from "../../components/carousels";
import { HeaderDesktop } from "../../components/header/headerDesktop";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
export function Home(){
    return(
        <ContainerHome>
            <Header />
            <SectionCarousel>
                <BannerHome />
                <CarouselContent>
                    <SectionProducts>
                        Refeições
                    </SectionProducts>
                    <Carousels>
                        <Card 
                        title="Salada Ravanello"
                        price='49,97'
                        description='Delicioso folheado de pêssego com folhas de hortelã.'
                        quantity='2'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    
                    </Carousels>
                </CarouselContent>
             
            </SectionCarousel>

            <SectionCarousel>
                <CarouselContent>
                    <SectionProducts>
                        Refeições
                    </SectionProducts>
                    <Carousels>
                        <Card 
                        title="Salada Ravanello"
                        price='49,97'
                        description='Delicioso folheado de pêssego com folhas de hortelã.'
                        quantity='2'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    
                    </Carousels>
                </CarouselContent>
             
            </SectionCarousel>

            <SectionCarousel>
                <CarouselContent>
                    <SectionProducts>
                        Refeições
                    </SectionProducts>
                    <Carousels>
                        <Card 
                        title="Salada Ravanello"
                        price='49,97'
                        description='Delicioso folheado de pêssego com folhas de hortelã.'
                        quantity='2'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    <Card 
                        title="Outro Card"
                        price='59,97'
                        description='Uma descrição diferente.'
                        quantity='1'
                    />
                    
                    </Carousels>
                </CarouselContent>
             
            </SectionCarousel>
            <Footer />
        </ContainerHome>
    )
}