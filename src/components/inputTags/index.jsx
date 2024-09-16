import { Container } from "./styles";
import { Plus, Close } from "@phosphor-icons/react";
export function InputTags({flag, title}){
    return(
        <Container>
            <input
                type="text"
                value={title}
                readOnly={!flag}
                {...rest}
            />

            <button
            type="button"
            onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'} >
                {isNew ? <Plus size={8} /> : <Close size={8}/>}
            </button>

        </Container>
    )
}