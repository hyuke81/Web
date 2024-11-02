import { useState, useEffect } from "react";

const useCustomError = (isError) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(isError);
    }, [isError]);

    return error ? <div><h1 style={{ color: 'white' }}>Error...</h1></div> : null;
};

export default useCustomError;
