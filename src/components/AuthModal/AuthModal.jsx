// AuthModal.js

import React, { useState } from 'react';
import { Modal, Button, Input, Spin } from 'antd';
import AuthModalCSS from './AuthModal.module.css'

const AuthModal = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);

        // Ваша логіка авторизації тут

        // При успішній авторизації:
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 2000);
    };



    return (
        <div>
            <Button className={AuthModalCSS.button}  type="primary" onClick={() => setVisible(true)}>
                Вхід
            </Button>

            <Modal
                title="Авторизація"
                visible={visible}
                onCancel={() => setVisible(false)}
                className={AuthModalCSS.modal}
                footer={[
                    <Button className={AuthModalCSS.login} key="login" type="primary" onClick={handleLogin} loading={loading}>
                        {loading ? <Spin /> : 'Увійти'}
                    </Button>,
                    <Button className={AuthModalCSS.cancel} key="cancel" onClick={() => setVisible(false)}>
                        Скасувати
                    </Button>,                    
                ]}
            >
                <Input className={AuthModalCSS.input} placeholder="Логін" />
                <Input.Password className={AuthModalCSS.input} placeholder="Пароль" />
            </Modal>
        </div>
    );

};

export default AuthModal;
