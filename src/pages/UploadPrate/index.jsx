import { Button } from "../../components/button";
import { ButtonBack } from "../../components/buttonBack";
import { Footer } from "../../components/footer";
import { HeaderMobile } from "../../components/header/headerMobile";
import { Input } from "../../components/input";
import { InputTags } from "../../components/inputTags";
import { Label } from "../../components/label";
import { Textarea } from "../../components/textArea";
import { Container, ContentForm, FormCamp, IngredientsCamp, UploadButtons, InputContent, Select } from "./styles";
import { UploadSimple } from "@phosphor-icons/react";
import { HeaderDesktop } from "../../components/header/headerDesktop";
import useMobile from "../../hooks/useMobile";
 
export function UpdatePrate(){
    const isMobile = useMobile()
    const flag = false
    // TODO: ajustar o tamanho dos input

    return(
        <Container>
                {isMobile ? <HeaderMobile /> : <HeaderDesktop />}

     
            <ContentForm>
                <ButtonBack
                    sizearrow={22}
                />
                <h2>Editar Prato</h2>
                    <InputContent>
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
                            <Label title="Nome"/>
                            <Input 
                                backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                                borderradius='8px'
                                type="text" id="name" name="name"
                                placeholder="Ex.: Salada Ceasar" />
                        </FormCamp>
                        <FormCamp>
                            <Label title="Categoria"   />
                            <Select >
                                <option value="live">Ao vivo</option>
                                <option value="podcast">Podcast</option>
                                <option value="mentorship">Mentoria</option>
                            </Select>
                              
                        </FormCamp>
                    </InputContent>

                    <InputContent>
                        <FormCamp>
                            <Label title="Ingredientes" />
                            <IngredientsCamp> 
                                    <InputTags title="Pão Naan" isNew={flag}/>
                                    <InputTags title="Adicionar" isNew={!flag}/>
                            </IngredientsCamp>
                        </FormCamp>
                        <FormCamp >
                            <Label title="Preço"/>
                            <Input 
                                backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                                borderradius='8px'
                                type="number" id="price" name="price"
                                placeholder="R$ 00,00" label="tddddext" />
                                
                        </FormCamp>
                    </InputContent>

                        <FormCamp>
                            <Label title="Descrição" />
                            <Textarea
                                placeholder="A Salada César é uma opção refrescante para o verão." 
                            />
                        </FormCamp>
          
                    <UploadButtons>
                        <Button 
                            color={({ theme }) => theme.COLORS.DARK_800}
                            text="Excluir prato"
                        />
                        <Button
                            color={({ theme }) => theme.COLORS.TINTS_TOMATO_400}
                            text="Salvar alterações"
                        />
                    </UploadButtons>
                   
            </ContentForm>
            <Footer />

        </Container>
        
    )
}