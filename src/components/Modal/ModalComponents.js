import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '30%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '100vh',
        fontSize: '1.3rem'
    }
};


const ModalComponents = ({children, props}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <div onClick={() => setIsOpen(modalIsOpen => !modalIsOpen)}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(modalIsOpen => modalIsOpen)}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button onClick={() => setIsOpen(modalIsOpen => modalIsOpen)}>close</button>
                { modalIsOpen &&  <div> {props}</div> }
                
            </Modal>
            <span>{children}</span>
        </div>
    )
}

export default ModalComponents

