import React, {useState} from 'react';
import { useAuth } from '../hook/useAuth';
import Modal from 'react-modal';
import {useNavigate} from 'react-router-dom';
import './styles/exit-modal.less';

const ExitModal = () => {
    const {signOut} = useAuth();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(isModalOpen => !isModalOpen);
    }

    return (
        <>
            <button className="private-menu-item-link" onClick={toggleModal}>Выход</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                toggle={toggleModal}
                ariaHideApp={false}
                overlayClassName="modal-overlay"
                className="modal-open exit-modal-wrapper">
                <div className="exit-modal">
                    <p className="exit-modal-text">Вы действительно хотите выйти?</p>
                    <div className="exit-modal-action">
                        <button className="btn btn-default" onClick={() => signOut(() => navigate('/', {replace: true}))}>Да</button>
                        <button className="btn btn-primary" onClick={toggleModal}>Нет</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export {ExitModal}