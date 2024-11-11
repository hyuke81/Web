import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance.js";

const useCustomFetch = (url) => {
    const [data, setData] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                console.log("Fetching data from:", url);
                const response = await axiosInstance.get(url);
                console.log("Full API Response:", response);
                console.log("Response Data:", response.data);

                if (response.data.results) {
                    setData(response.data.results);
                } else {
                    setData(response.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, isLoading, isError };
};

export default useCustomFetch;
