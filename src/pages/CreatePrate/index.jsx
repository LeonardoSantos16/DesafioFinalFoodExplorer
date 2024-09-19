import { Button } from "../../components/button";
import { ButtonBack } from "../../components/buttonBack";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { HeaderMobile } from "../../components/header/headerMobile";
import { Input } from "../../components/input";
import { InputTags } from "../../components/inputTags";
import { Label } from "../../components/label";
import { Textarea } from "../../components/textArea";
import { Container, ContentForm, FormCamp, IngredientsCamp, Select } from "./styles";
import { UploadSimple } from "@phosphor-icons/react";
export function CreatePrate(){
    // TODO: arrumar os erros que esta dando no console
    const flag = false
    return(
        <Container>
            <Header />
            <ContentForm>
                <ButtonBack
                    sizearrow={22}
                    styletext={({ theme }) => theme.fonts.poppinsMedium100}
                />
                <h2>Novo Prato</h2>
                    <FormCamp>
                        <Label title="Imagem do prato" />
                        <Input 
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            icon={UploadSimple}
                            type="file" id="image-upload" name="image"
                            placeholder="Selecione imagem" 

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
                        <Select >
                                <option value="live">Ao vivo</option>
                                <option value="podcast">Podcast</option>
                                <option value="mentorship">Mentoria</option>
                            </Select>
                    </FormCamp>
                    <FormCamp>
                        <Label title="Ingredientes" />
                        <IngredientsCamp> 
                                <InputTags title="Pão Naan" isNew={flag}/>
                                <InputTags title="Adicionar" isNew={!flag}/>
                        </IngredientsCamp>
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

            <Footer />
        </Container>
        
    )
}