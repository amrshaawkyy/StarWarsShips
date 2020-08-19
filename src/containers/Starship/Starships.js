import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../components/UI/Button/Button';
import Starship from '../../components/Starship/Starship';
import classes from './Starships.css';

class Starships extends Component {
    state = {
        starship: [],
        selectedPage: 1,
        next: false,
        prev: false
    }
    // http://swapi.dev/api/starships/?page=1
    componentDidMount() {
        this.fetchData(this.state.selectedPage);
    }
    fetchData = (i) => {
        axios.get('http://swapi.dev/api/starships/?page=' + i).then(response => {
            console.log(response.data);
            console.log('http://swapi.dev/api/starships/?page=' + this.state.selectedPage);
            this.setState({ starship: response.data.results, next: response.data.next === null ? false : true, prev: response.data.previous === null ? false : true });
        });
    }
    prevHandler = () => {
        const oldCount = this.state.selectedPage;
        if (this.state.prev) {
            this.setState((prevState) => {
                return { selectedPage: prevState.selectedPage - 1 };
            });
            this.fetchData(oldCount - 1);
        }
    }
    nextHandler = () => {
        const oldCount = this.state.selectedPage;
        if (this.state.next) {
            this.setState((prevState) => {
                return { selectedPage: prevState.selectedPage + 1 };
            });
            this.fetchData(oldCount + 1);
        }
    }
    render() {
        const starship = this.state.starship.map(starship => {
            return <Starship
                key={starship.created}
                name={starship.name}
                crew={starship.crew}
                passengers={starship.passengers}
                hyperdrive_rating={starship.hyperdrive_rating}
            />
        });
        return (
            <div className={classes.Starships}>
                <section>
                    {starship}
                </section>
                <div>
                    <Button btnType="Danger" clicked={this.prevHandler} disable={this.state.selectedPage === 1}>Previous</Button>
                    <Button btnType="Success" clicked={this.nextHandler} disable={!this.state.next}>Next</Button>
                </div>

            </div>
        );
    }
}
export default Starships;