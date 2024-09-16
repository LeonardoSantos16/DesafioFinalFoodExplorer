import { HeaderMobile } from "../../components/header/headerMobile";
import { Container } from "./styles";

export function CreatePrate(){
    return(
        <Container>
            <HeaderMobile />

            <AddPrateForm>
                <h2>Novo Prato</h2>

                
            </AddPrateForm>
        </Container>
        
    )
}