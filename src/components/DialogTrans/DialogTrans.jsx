// Dialog.js

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './DialogTrans.css';

const Dialog = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div>
            <button onClick={() => setShowDialog(!showDialog)}>Відкрити вікно</button>

            <CSSTransition
                in={showDialog}
                timeout={300}
                classNames="dialog"
                unmountOnExit
            >
                <div className="dialog">
                    <h2>Діалогове вікно</h2>
                    <p>Повідомлення</p>
                    <button onClick={() => setShowDialog(false)}>Закрити</button>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Dialog;
