import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

const Loading = (): any => {
    const [loading, setLoading] = useState(false);
    const loadingDuration = 1000;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, loadingDuration);

    }, [])

    return loading !== false && (
        <div style={{
            position: 'absolute',
            inset: '0',
            backgroundColor: 'white',
            opacity: '.3',
            zIndex: 100
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: '15rem',
                paddingTop: '1rem',
                color: 'white'
            }}>
                <CircularProgress color='secondary' />
            </div>
        </div>
    );
}

export default Loading;