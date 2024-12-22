import { BannerHome } from "../../components/bannerHome";
import { HeaderMobile } from "../../components/header/headerMobile";
import { HeaderDesktop } from "../../components/header/headerDesktop";
import { Footer } from "../../components/footer";
import { Carousels } from "../../components/carousels";
import { Card } from "../../components/card";
import { useAuth } from "../../hooks/authContext";
import {
  ContainerHome,
  SectionProducts,
  CarouselContent,
  SectionCarousel,
  CarouseulContainer,
} from "./styles";
import { api } from "../../services/api";
import useMobile from "../../hooks/useMobile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const isMobile = useMobile();
  const navigate = useNavigate();
  const {isAdmin} = useAuth()
  const handleNavigateDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const fetchPrate = async () => {
    const response = await api.get("/food");
    setData(response.data);
  };

  const fetchSearch = async () => {
    const response = await api.get(`/food?query=${search}`);
    setData(response.data);
  };

  useEffect(() => {
    fetchPrate();
  }, []);

  useEffect(() => {
    fetchSearch();
  }, [search]);
  console.log(data)
  const renderCategoryCarousel = (category, title) => {
    if (!data.find((item) => item.category === category)) return null;
    return(
    <SectionCarousel>
      <CarouselContent>
        <SectionProducts>{title}</SectionProducts>
        <Carousels>
          {data
            .filter((item) => item.category === category)
            .map((item, index) => (
              <Card
                key={item.id || index}
                title={item.title}
                price={item.price.toFixed(2).replace('.', ',')}
                description={item.description}
                image={`${api.defaults.baseURL}/files/${item.food_icon}`}
                quantity="2"
                onClick={() => handleNavigateDetails(item.id)}
              />
            ))}
        </Carousels>
      </CarouselContent>
    </SectionCarousel>
  );
  }
  return (
    <ContainerHome>
      {isMobile ? (
        <HeaderMobile />
      ) : (
        <HeaderDesktop value={search} onChange={(e) => setSearch(e.target.value)} />
      )}

      <CarouseulContainer>
        <BannerHome />
        {renderCategoryCarousel("meal", "Refeições")}
        {renderCategoryCarousel("dessert", "Sobremesas")}
        {renderCategoryCarousel("drink", "Bebidas")}
      </CarouseulContainer>

      <Footer />
    </ContainerHome>
  );
}
