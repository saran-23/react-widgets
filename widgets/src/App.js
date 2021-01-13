import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import  Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'why use react',
        content: 'React is a favourit JS libarary among engineers',

    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
]
const options =[
    {
        label:'The Color Red',
        value: 'red'
    },
    {
        label:'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
];

        // eslint-disable-next-line 
        export default () => {

          const [selected ,setSelected]=useState(options[2]);            //shows the default label
            const [showDropdown,setShowDropdown]=useState(true);

        return (
                <div>
                    <button onClick={() => {setShowDropdown(!showDropdown)}}>

                    Toggle Button
                    </button>
                    {  showDropdown ? //ternary expression                                                       
                    <Dropdown
                     selected={selected}
                     onSelectedChange={setSelected}
                     options={options}
                     /> : null
                    }
                     </div>
            );
        };
