import { useEffect, useState } from "react";

const useData = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://immense-mountain-96317.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setItems(data);

            });
    }, []);

    return [items, setItems];
}

export default useData;