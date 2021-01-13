import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results,setresults]=useState('');


    useEffect(() => {
     const search = async () => {
     const {data} =   await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action:'query',
                    list:'search',
                    origin: '*',
                    format:'json',
                    srsearch: term,
                },
            });
            setresults(data.query.search);
        };

            search();
    },[term]);
                   
    const renderredResults = results.map((result) => {
        return (
                 <div className="item">
                            <div className="content"> 
                            <div className="header">
                            {result.title}
                            </div>
                            {result.snippet}
                            </div>    
                            </div>
                        );
                    });
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                        <input
                         value={term}
                         onChange={(e) =>setTerm(e.target.value)}
                         className="input" />
                </div>
            </div>
            <div className="ui celled list"> 
                {renderredResults}
            </div>
        </div>
    );
}

export default Search;