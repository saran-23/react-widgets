import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import axios from 'axios';
const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get('saran');
        };

        search();
    },[term]);
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
        </div>
    );
}

export default Search;