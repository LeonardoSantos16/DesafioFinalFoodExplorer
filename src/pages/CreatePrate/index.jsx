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
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
export function CreatePrate() {
    const isMobile = useMobile()
    const flag = false
    // TODO: ajustar o tamanho dos input
    // TODO: alterar o nome da coluna preco para price no front e back end
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [preco, setPreco] = useState(0);
    const [description, setDescription] = useState("");
    const [imageFood, setImageFood] = useState("");
    const [newIngredients, setNewIngredients] = useState("");
    const [ingredients, setIngredients] = useState([])

    function handleBack() {
        Navigate(-1)
    }
    const navigate = useNavigate();
    function handleRemoveIngredients(deleted) {
        setIngredients(prevState => prevState.filter(ingredients => ingredients !== deleted))
    }

    function handleAddIngredients() {
        setIngredients(prevState => [...prevState, newIngredients]);
    }

    async function handleCreatePrate() {
        event.preventDefault()
        const food = {
            title,
            category,
            description,
            preco,
            ingredients,
        }
        if (imageFood) {
            const pictureFood = new FormData();
            pictureFood.append("food_icon", imageFood)

            const response = await api.post("/food/icon/", pictureFood);
            food.food_icon = response.data;
        }
        console.log(food)
        await api.post("/food/", food)
        alert("Prato criado com sucesso");
        navigate("/")
    }

    return (
        <Container>
            {isMobile ? <HeaderMobile /> : <HeaderDesktop />}


            <ContentForm>
                <ButtonBack onClick={handleBack}
                    sizearrow={22}
                />
                <h2>Adicionar Prato</h2>
                <InputContent>
                    <FormCamp>
                        <Label title="Imagem do prato" />
                        <Input
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            icon={UploadSimple}
                            type="file" id="image-upload" name="image"
                            placeholder="Selecione imagem"
                            onChange={e => setImageFood(e.target.files[0])}
                        />

                    </FormCamp>
                    <FormCamp>
                        <Label title="Nome" />
                        <Input
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            type="text" id="title" name="title"
                            placeholder="Ex.: Salada Ceasar"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </FormCamp>
                    <FormCamp>
                        <Label title="Categoria" />
                        <Select onChange={e => setCategory(e.target.value)} value={category}>
                            <option value="meal">Refeições</option>
                            <option value="drink">Bebidas</option>
                            <option value="dessert">Sobremesas</option>
                        </Select>

                    </FormCamp>
                </InputContent>

                <InputContent>
                    <FormCamp>
                        <Label title="Ingredientes" />
                        <IngredientsCamp>

                            {
                                ingredients.map((ingredients, index) => (
                                    <InputTags
                                        key={String(index)}
                                        value={ingredients}
                                        onClick={() => { handleRemoveIngredients(ingredients) }} />
                                ))
                            }
                            <InputTags onClick={handleAddIngredients} onChange={e => setNewIngredients(e.target.value)} value={newIngredients} title="Adicionar" isNew={!flag} />
                        </IngredientsCamp>
                    </FormCamp>
                    <FormCamp >
                        <Label title="Preço" />
                        <Input
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            type="number" id="preco" name="preco"
                            placeholder="R$ 00,00" label="tddddext"
                            value={preco}
                            onChange={e => setPreco(e.target.value)}
                        />


                    </FormCamp>
                </InputContent>

                <FormCamp>
                    <Label title="Descrição" />
                    <Textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
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
                        onClick={handleCreatePrate}
                    />
                </UploadButtons>

            </ContentForm>
            <Footer />

        </Container>

    )
}