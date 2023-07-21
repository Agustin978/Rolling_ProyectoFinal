import { Modal } from "react-bootstrap";

const AgregaDetalles = ({showDetalles, handleCloseDetalles}) => {
    return (
        <Modal show={showDetalles} onHide={handleCloseDetalles}>
            <Modal.Header>
                <Modal.Title>Agregue los detalles de su pedido :)</Modal.Title>
            </Modal.Header>
        </Modal>
    );
};

export default AgregaDetalles;