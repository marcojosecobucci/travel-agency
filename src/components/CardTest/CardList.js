import React, { Children } from 'react'
import { ApiContext } from '../../ApiContext';
import CardItem from './CardItem';
import "../Accordion/AccordionInfo/AccordionInfoStyles.css"
import AccordionInfo from '../Accordion/AccordionInfo/AccordionInfo';


const dateFormat = (datain) => {
    return datain.split('-').reverse().join('/');
}


function CardList() {
    const { dataApi } = React.useContext(ApiContext);
    const cardArray = [];
    const places = [];
    const occorrenze = [];
    let previous = dataApi.rows[0].places[0].name, counter = 0, dim = dataApi.rows.length;

    dataApi.rows.map(riga => {
        const name = riga.places.map(el => {
            if (previous === el.name) {
                counter++;
            } else {
                occorrenze.push(counter);
                places.push(previous);
                counter = 1;
                previous = el.name;
            }
            dim--;
            if (dim === 0) { occorrenze.push(counter); places.push(previous); }
            return el.name;
        });
        const transports = riga.transports.map(el => el);
        const pernottamento = riga.accomodations.map(el => el);

        return (
            riga.days.map(giorno => {
                const imgurl = giorno.images.map(el => el.image);
                return (
                    cardArray.push(
                        <CardItem titolo={name}
                            nome={giorno.name}
                            data={dateFormat(riga.dayDate)}
                            descrizione={riga.days[0].description}
                            img={imgurl}
                            pernottamento={pernottamento}
                            trasporto={transports}
                            incluso={riga.included}
                            escluso={riga.notIncluded}
                        />
                    )
                )
            })
        )
    })

    function compo(num) {
        let index = 0;
        return cardArray.splice(index, num);
    }

    return (
        <div>
            {
                occorrenze.map((num, i) => {
                    return (
                        <>
                            <AccordionInfo title={places[i].toUpperCase()}
                                children={
                                    compo(num)
                                }
                            />
                        </>
                    )
                })
            }
        </div>
    )
}

export default CardList
