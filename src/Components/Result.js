import React, {useState, useEffect} from 'react';
import './Result.css';
import './Search.css';
import BookResult from './BookResult';

function Result() {
    
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    let loadingData = <h2>Receiving data...</h2>;
    
    async function getData(req) {
        setLoading(true);
        let searchString = req.split(" ").join("+");
        fetch(`https://openlibrary.org/search.json?title=${searchString}`)
            .then((response) => response.json())
            .then((data) => {setData(data); setResult(data.docs)})
            .then(() => setLoading())
            .catch(setError);
    }

    /*useEffect(() => {
        setLoading(true);
        fetch("http://openlibrary.org/search.json?author=tolkien")
            .then((response) => response.json())
            .then((data) => setData(data))
            .then(() => setLoading())
            .catch(setError);

    }, []);*/

    if (loading) {
        loadingData = <h2 className="animate">Receiving data...</h2>;
    }

    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>
    }

    let resArray = data.docs;

    function Search() {
        let searchBar = document.getElementById("search-bar");
        if (searchBar.value) {
            getData(searchBar.value)
        }
    }
    let timerId = null;

    function handleSearch() {
        if (timerId) {
            clearTimeout(timerId);
        }
        let searchBar = document.getElementById("search-bar");
        if (searchBar.value) {
            timerId = setTimeout(() => getData(searchBar.value), 1000);
        }
        
    }

    return (
        <div className="container">
            <div className="search">
                <input type="text" id="search-bar" placeholder="Enter a book name" onChange={handleSearch}></input>
                <a id="search-button" onClick={Search}>search</a>
            </div>
            {loading ?
            loadingData
            :
            <BookResult res={result}/>
            }
        </div>
    )

    
    
}

export default Result;
