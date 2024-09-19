import useMobile from "../../hooks/useMobile";
import { HeaderDesktop } from "./headerDesktop";
import { HeaderMobile } from "./headerMobile";
export function Header(){
    const isMobile = useMobile()
    return(
        <>
            {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
        </>
    )
}
