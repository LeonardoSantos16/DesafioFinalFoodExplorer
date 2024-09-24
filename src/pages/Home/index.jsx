import { BannerHome } from "../../components/bannerHome";
import { HeaderMobile } from "../../components/header/headerMobile";
import { ContainerHome, SectionProducts, CarouselContent, SectionCarousel, CarouseulContainer } from "./styles";
import { Card } from "../../components/card";
import { Carousels } from "../../components/carousels";
import { HeaderDesktop } from "../../components/header/headerDesktop";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import useMobile from "../../hooks/useMobile";
import { useNavigate, useParams } from "react-router-dom";

export function Home() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("");
    const isMobile = useMobile()
    const navigate = useNavigate()
    const params = useParams();

    function handleNavigateDetails(id) {
        navigate(`/details/${id}`)
    }


    useEffect(() => {
        async function fetchPrate() {
            const response = await api.get("/food")
            setData(response.data)
        }
        fetchPrate()
    }, [])

    useEffect(() => {
        async function fetchSearch() {
            const response = await api.get(`/food?query=${search}`)
            setData(response.data)
        }
        fetchSearch()
    }, [search])
    return (

        <ContainerHome>
            {isMobile ? <HeaderMobile /> : <HeaderDesktop value={search} onChange={e => setSearch(e.target.value)} />}
            <CarouseulContainer>
                <SectionCarousel>
                    <BannerHome />
                    <CarouselContent>
                        <SectionProducts>
                            Refeições
                        </SectionProducts>
                        <Carousels>
                            {data.filter(prate => prate.category === 'meal').map((prate, index) => (
                                <Card key={String(index)}
                                    title={prate.title}
                                    price={prate.price.toFixed(2)}
                                    description={prate.description}
                                    image={`${api.defaults.baseURL}/files/${prate.food_icon}`}
                                    quantity='2'
                                    onClick={() => handleNavigateDetails(prate.id)}
                                />
                            ))
                            }

                        </Carousels>
                    </CarouselContent>

                </SectionCarousel>

                <SectionCarousel>
                    <CarouselContent>
                        <SectionProducts>
                            Sobremesas
                        </SectionProducts>
                        <Carousels>
                            {data.filter(prate => prate.category === 'dessert').map((prate, index) => (
                                <Card key={String(index)}
                                    title={prate.title}
                                    price={prate.price.toFixed(2)}
                                    description={prate.description}
                                    image={`${api.defaults.baseURL}/files/${prate.food_icon}`}
                                    quantity='2'
                                    onClick={() => handleNavigateDetails(prate.id)}

                                />
                            ))
                            }
                        </Carousels>
                    </CarouselContent>

                </SectionCarousel>

                <SectionCarousel>
                    <CarouselContent>
                        <SectionProducts>
                            Bebidas
                        </SectionProducts>
                        <Carousels>
                            {data.filter(prate => prate.category === 'drink').map((prate, index) => (
                                <Card key={String(index)}
                                    title={prate.title}
                                    price={prate.price.toFixed(2)}
                                    description={prate.description}
                                    image={`${api.defaults.baseURL}/files/${prate.food_icon}`}
                                    quantity='2'
                                    onClick={() => handleNavigateDetails(prate.id)}
                                />
                            ))
                            }
                        </Carousels>
                    </CarouselContent>

                </SectionCarousel>
            </CarouseulContainer>

            <Footer />
        </ContainerHome>
    )
}