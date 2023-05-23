import React, { useEffect, useState } from 'react'

const lists = [
    {
        id: 1,
        name: 'ali',
        family: 'zari',
        age: 22
    },
    {
        id: 2,
        name: 'adad',
        family: 'zadadari',
        age: 23
    },
    {
        id: 3,
        name: 'erg',
        family: 'dgdfd',
        age: 24
    },
    {
        id: 4,
        name: 'sfsfrer',
        family: 'ferferd',
        age: 25
    }
];


export default function Todos() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(lists);
    }, [data]);


    const handleDel = (id) => {
        console.log(id)
        const newData = data.filter((item) => { return item.id !== id });
        setData(newData);
    }

    const newFile = "";
    const handleChange = (e) => {
        newFile = e.target.value;
        console.log(newFile)
    }

    const handleAdd = () => {
        console.log(newFile)
        setData([...data, newFile])
    }



    return (
        <>
            <div>
                <input type="text" onChange={handleChange} />
                <button>del</button>
                <button onClick={handleAdd}>add</button>
                <button>edit</button>
            </div>
            <div>
                <ul>
                    {data.map(list => {
                        return <li onClick={() => handleDel(list.id)} key={list.id}>{list.name}</li>
                    })}
                </ul>
            </div>
        </>
    )
}




