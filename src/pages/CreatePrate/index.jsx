import { Button } from "../../components/button";
import { HeaderMobile } from "../../components/header/headerMobile";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { Textarea } from "../../components/textArea";
import { Container, ContentForm, FormCamp } from "./styles";
import { UploadSimple } from "@phosphor-icons/react";
export function CreatePrate(){
    return(
        <Container>
            <HeaderMobile />

            <ContentForm>
                <h2>Novo Prato</h2>
                    <FormCamp>
                        <Label title="Imagem do prato" />
                        <Input 
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            icon={UploadSimple}
                            type="file" id="image-upload" name="image"
                            placeholder="Selecione imagem" 
                            border="none"
                            />
                    
                    </FormCamp>
                    <FormCamp>
                        <Label title="Nome" />
                        <Input 
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            type="text" id="name" name="name"
                            placeholder="Ex.: Salada Ceasar" />
                    </FormCamp>
                    <FormCamp>
                        <Label title="Categoria" />
                        <Input 
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            type="radio" id="category" name="category"
                            placeholder="Refeição" />
                    </FormCamp>
                    <FormCamp>
                        <Label title="Ingredientes" />
                        <Input 
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            type="text" id="category" name="category"
                            placeholder="Refeição" />
                    </FormCamp>
                    <FormCamp>
                        <Label title="Preço" />
                        <Input 
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            type="number" id="price" name="price"
                            placeholder="R$ 00,00" />
                    </FormCamp>
                    <FormCamp>
                        <Label title="Descrição" />
                        <Textarea
                            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                        />
                    </FormCamp>
                    <Button
                        color={({ theme }) => theme.COLORS.TINTS_TOMATO_400}
                        text="Salvar alterações"
                    />
            </ContentForm>
        </Container>
        
    )
}