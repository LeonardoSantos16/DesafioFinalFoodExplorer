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
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function UpdatePrate() {
    // TODO: ajustar o tamanho dos input
    // mudar o placeholder do input image
    const isMobile = useMobile()
    const flag = false
    const [data, setData] = useState(null);
    const [title, setTitle] = useState('')
    const [preco, setPreco] = useState(0)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")
    const [imageFood, setImageFood] = useState("");
    const navigate = useNavigate()
    const params = useParams()
    useEffect(() => {
        async function fetchPrate() {
            const response = await api.get(`/food/${params.id}`)
            setData(response.data)
            setTitle(response.data.title)
            setPreco(response.data.preco)
            setDescription(response.data.description)
            setCategory(response.data.category)
            const ingredientNames = response.data.foodIngredient.map(ingredient => ingredient.name);
            setIngredients(ingredientNames);
        }

        fetchPrate();
    }, [params.id])


    async function handleUpdatePrate() {
        event.preventDefault()
        const prateUpdated = {
            title,
            category,
            description,
            preco,
            ingredients,
        }
        if (imageFood) {
            const pictureFood = new FormData();
            console.log("Imagem do prato:", imageFood);
            pictureFood.append("food_icon", imageFood)

            const response = await api.put(`/food/icon/${params.id}`, pictureFood);
            console.log("teste2")
        }
        console.log(prateUpdated)
        await api.patch(`/food/${params.id}`, prateUpdated)
        console.log("teste4")
        alert("Prato atualizado com sucesso");
        navigate("/")
    }
    function handleRemoveIngredients(deleted) {
        setIngredients(prevState => prevState.filter(ingredients => ingredients !== deleted))
    }

    function handleAddIngredients() {

        setIngredients(prevState => [...prevState, newIngredients]);
        console.log(ingredients)
    }

    return (
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
                            onChange={e => setImageFood(e.target.files[0])}
                        />

                    </FormCamp>
                    <FormCamp>
                        <Label title="Nome" />
                        <Input
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            type="text" id="name" name="name"
                            placeholder="Ex.: Salada Ceasar"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </FormCamp>
                    <FormCamp>
                        <Label title="Categoria" />
                        <Select value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
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
                            {ingredients.map((ingredient, index) => (
                                <InputTags key={index} value={ingredient} isNew={false} onClick={() => { handleRemoveIngredients(ingredient) }} />
                            ))}
                            <InputTags placeholder="Adicionar" onClick={handleAddIngredients} onChange={e => setNewIngredients(e.target.value)} value={newIngredients} isNew={true} />
                        </IngredientsCamp>
                    </FormCamp>
                    <FormCamp >
                        <Label title="Preço" />
                        <Input
                            backgroundcolor={({ theme }) => theme.COLORS.DARK_800}
                            borderradius='8px'
                            type="number" id="price" name="price"
                            placeholder="R$ 00,00" label="tddddext"
                            value={preco}
                            onChange={e => setPreco(e.target.value)}
                        />

                    </FormCamp>
                </InputContent>

                <FormCamp>
                    <Label title="Descrição" />
                    <Textarea
                        placeholder="A Salada César é uma opção refrescante para o verão."
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
                        onClick={handleUpdatePrate}
                    />
                </UploadButtons>

            </ContentForm>
            <Footer />

        </Container>

    )
}