import React from 'react';
import CardStyle from "./Card.module.css";

const Card = ({data, about}) => {
    return (
        <section className={CardStyle.section}>
            <h2 className={CardStyle.title}>
                {about ? data.name : `Aprende ${data.language}`}</h2>
            <img
                src={`/img/${data.img}.png`}
                alt="Portada del Libro"
                className={CardStyle.img}
            />

            <p> {data.description}</p>
            <a href="/libro/1"
               className={CardStyle.button}
            >Ver más
            </a>

        </section>
    );
};

export default Card;