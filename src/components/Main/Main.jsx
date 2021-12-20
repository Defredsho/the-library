import React from 'react';
import Card from "../Card/Card";
import MainStyle from "./Main.module.css"


const Main = () => {

    const books = [
        {
            id: 1,
            language: 'Java',
            img: 'librojava',
            description: 'El mejor libro para aprender Java'
        },
        {
            id: 2,
            language: 'Python',
            img: 'libropython',
            description: 'El mejor libro para aprender python'
        },
        {
            id: 3,
            language: 'HTML',
            img: 'librohtml',
            description: 'El mejor libro para aprender html'
        },
        {
            id: 4,
            language: 'CSS',
            img: 'librocss',
            description: 'El mejor libro para aprender css'
        },
        {
            id: 5,
            language: 'C++',
            img: 'libroCmasmas',
            description: 'El mejor libro para aprender C++'
        }
    ]

    return (
        <main className={MainStyle.main}>
            {books.map(book => <Card key={book.id} data={book}/>)}
        </main>
    );
};
export default Main;