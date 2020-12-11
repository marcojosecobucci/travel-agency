import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import ModalComponents from '../Modal/ModalComponents';
import './CardItem.css'

const dateFormat = (datain) => {
    return datain.split('-').reverse().join('/');
}


export class CardItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            immagini: {},
            hotel: {
                name: "default",
                description: "default",
            },
        }
    }

    componentDidMount() {
        const [hotel] = [...this.props.pernottamento];
        let [images] = [];
        if (hotel !== undefined) {
            [images] = [...hotel.images];
        }

        this.setState({ hotel: hotel, immagini: images });
    }

    render() {
        const [trasporto] = [...this.props.trasporto];

        console.log("hotel ", this.state.hotel);
        return (
            <>
                <div className="cardBody">
                    <div>
                        <h5>{this.props.titolo}</h5>
                        <span ><strong className='text-yellow' >{this.props.nome}</strong></span> 
                        <br/>
                        <span className='text-grey'> {this.props.data}</span>
                        <div>
                            <img className='img-primary' src={this.props.img} alt="img" />
                            <p>{this.props.descrizione}</p>
                        </div>
                        <div>
                            {/* <div>mettere box colorato con auto</div> */}
                            {trasporto &&
                                <ModalComponents
                                    props={
                                        <>
                                            <h3>{trasporto.name}</h3>
                                            <hr></hr>
                                            <p>icona auto</p>
                                            <p>TIPOLOGIA AUTO</p>
                                            <span>LUOGO DI RITIRO</span> <span>{trasporto.pickup.name}</span><br></br>
                                            <span>DATA DI RITIRO</span> <span>{dateFormat(trasporto.withdrawalDate)}</span><br></br>
                                            <span>LUOGO DI RILASCIO</span> <span>{trasporto.return.name}</span><br></br>
                                            <span>DATA DI RILASCIO</span> <span>{dateFormat(trasporto.releaseDate)}</span>
                                            <p>IL NOLEGGIO AUTO COMPRENDE</p>
                                            <p>{trasporto.rentIncluded}</p>
                                            <span>SITO WEB </span>
                                            <span>{trasporto.contact.website}</span>
                                        </>
                                    }
                                >
                                    <div className="noleggioauto" >
                                        <h3>{trasporto.name}</h3>
                                        <span>LUOGO DI RITIRO</span> <span>{trasporto.pickup.name}</span><br></br>
                                        <span>LUOGO DI RILASCIO</span> <span>{trasporto.return.name}</span>

                                    </div>
                                </ModalComponents>
                            }
                            {this.state.hotel &&
                                <>
                                    {this.state.immagini &&
                                        <div>
                                            <img className='img-secondary' src={this.state.immagini.image} alt={this.state.immagini.image_name} />
                                        </div>
                                    }
                                    <ModalComponents
                                        props={
                                            <>
                                                <h3>{this.state.hotel.name}</h3>
                                                <hr></hr>
                                                <p>Hotel</p> <span>Stelle</span>
                                                <div>
                                                    <img className='img-primary' src={this.state.immagini.image} alt={this.state.immagini.image_name} />
                                                </div>
                                                <h4>DESCRIZIONE</h4>
                                                <span>{this.state.hotel.description}</span>
                                                <h4>RISTORANTE</h4>
                                                <span>{this.state.hotel.descriptionRestaurant}</span>
                                                <h4>CAMERE</h4>
                                                <span>{this.state.hotel.descriptionRooms}</span>
                                                <h4>SERVIZI</h4>
                                                <span>{this.state.hotel.descriptionServices}</span>
                                            </>
                                        }
                                    >
                                        <div className="pernottamento">
                                            <h3>{this.state.hotel.name}</h3>
                                            <span>{this.state.hotel.description}</span>
                                            <span>Clicca qui per maggiori dettagli</span>
                                        </div>
                                    </ModalComponents>
                                </>
                            }
                            <span>{this.props.incluso}</span>
                            {this.props.escluso != null && <span> {this.props.escluso}</span>}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default CardItem


CardItem.defaultProps = {
    titolo: "",
    nome: "",
    data: "",
    descrizione: "",
    img: "",
    pernottamento: "",
    trasporto: "",
    incluso: "",
    escluso: ""
}