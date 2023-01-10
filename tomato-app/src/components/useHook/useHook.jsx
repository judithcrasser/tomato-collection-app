import { useState, useEffect } from "react";

function useHook(url) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('something went wrong, tomato list can not be shown');
            }
            return res.json()
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            // console.log(err.message);
            setIsLoading(false);
            setError(err.message);
        })
    }, [url]);

return { data, isLoading, error }

}

export default useHook