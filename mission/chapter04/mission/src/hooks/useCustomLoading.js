import { useState, useEffect } from "react";

const useCustomLoading = (isLoading) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);

    return loading ? <div><h1 style={{ color: 'white' }}>loading...</h1></div> : null;
};

export default useCustomLoading;
