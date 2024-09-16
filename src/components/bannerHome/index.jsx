import imageBanner from '../../assets/imageBanner.svg'
export function BannerHome(){
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