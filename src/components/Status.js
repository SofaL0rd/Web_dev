import { useState, useEffect } from 'react';

function useStatus(initialStatus) {
    const [status, setStatus] = useState(initialStatus);
    useEffect(() => {
            console.log(`Статус змінився на: ${status}`);
        }, [status]);

    return [ status, setStatus ];
}

function useLogToConsole(data) {
    useEffect(() => {
        console.log('Дані зі стану:', data);
    }, [data]);
}

function Status() {
    const [ status, setStatus ] = useStatus('Активний');
    useLogToConsole(status);

    const toggleStatus = () => {
        setStatus(status === 'Активний' ? 'Неактивний' : 'Активний');
    }

    return (
        <div>
            <span>Статус: {status}</span>
            <button onClick={toggleStatus}>Змінити статус</button>
        </div>
    );
}

export default Status;
