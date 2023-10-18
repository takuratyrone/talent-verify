import axios from "axios";
import { useState } from "react";

const usePostData = (url, postData) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    axios.post(url, postData)
        .then((res) => {
            setData(res.data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });

    return { data, error, loading };
};

export default usePostData;