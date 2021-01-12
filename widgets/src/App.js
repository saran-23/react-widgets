import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

        export default () => {
        return (
                <div>
                    {/* <br />
                <Accordion items={items} /> */}
                <Search />
                </div>
            );
        };
