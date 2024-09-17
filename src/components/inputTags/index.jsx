import { Container } from "./styles";
import { Plus, X } from "@phosphor-icons/react";
export function InputTags({isNew, title, ...rest}){
    return(
        <Container isNew={isNew}>
            <input
                type="text"
                value={title}
                readOnly={!isNew}
                {...rest}
            />

            <button
            type="button"
           // onClick={onClick}
            className={isNew ? 'button-add' : 'button-delete'} >
                {isNew ? <Plus size={8} /> : <X size={8}/>}
            </button>

        </Container>
    )
}