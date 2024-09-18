import bannerMobile from '../../assets/imageBanner.svg'
import imageBannerMobile from '../../assets/imageBannerMobile.png'
import bannerDesktop from '../../assets/bannerDesktop.png'
import useTablet from '../../hooks/useTablet'
import { ContainerBanner, BannerContent } from './styles'
export function BannerHome(){
    const isTablet = useTablet()
    const imageBanner = isTablet ? bannerMobile : bannerDesktop
    return(
        <ContainerBanner>
            <img src={imageBanner} alt="banner" />
            <BannerContent>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </BannerContent>
        </ContainerBanner>
    )
}