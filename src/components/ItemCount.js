import { useState } from "react";
import { Button, Form } from "react-bootstrap";



const ItemCount = (props) => {
    const [valorDigitado, valorActualDigitado] = useState(props.initial)
    return (
        <div className="row justify-content-center mx-0">
            <div className="col-3 px-0 mt-4 pt-2 text-right"><Button variant="btn btn-primary" onClick={() => valorDigitado <= 0 ? '' : valorActualDigitado(valorDigitado - 1)}>-</Button></div>
            <div className="col-6 text-center px-0">
                <Form>
                    <Form.Group>
                        <Form.Label>Stock: {props.stock}</Form.Label>
                        <Form.Control className="text-center" type="text" value={valorDigitado} onChange={() =>''}></Form.Control>
                    </Form.Group>
                </Form>
            </div>
            <div className="col-3 px-0 mt-4 pt-2"><Button variant="btn btn-primary" onClick={() => valorActualDigitado(valorDigitado + 1) }>+</Button></div>
            <div className="col-12 px-0 text-center">{props.hideButton ? null : <Button variant="dark" onClick={(e) => (props.onAdd(e, valorDigitado))}>Agregar Al Carrito</Button>}</div>
        </div>
    )
};

export default ItemCount;