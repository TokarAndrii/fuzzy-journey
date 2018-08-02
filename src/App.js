import React, {Component} from 'react';
import gis from 'g-i-s'
import Input from './components/Input'
import Button from './components/Button'
import InputRange from './components/InputRange'
import ImagesList from './components/ImagesList'
import PropTypes from 'prop-types'
import './App.css';


class App extends Component {
    state = {
        links: [],
        searchValue: '',
        numOfColumns: 1,
    };

    handleInputSearchChange = string => this.setState({searchValue: string});

    handleInputRangeChange = number => this.setState({numOfColumns: number});

    handleClickButton = () => {
        let sliced = [];
        const opts = {
            searchTerm: this.state.searchValue,
            queryStringAddition: '&tbs=isz:ex,iszw:400,iszh:400',

        };
        gis(opts, logResults);

        function logResults(error, results) {
            if (error) {
                console.log(error);
            }
            else {
                sliced = results.slice(0, 20);
            }
        }

        setTimeout(() => {
            const arr = sliced.map(current => {
                return current = {...current, src: current.url}
            });

            this.setState({links: [...arr]});
        }, 2000);
    };


    render() {


        return (
            <div className="App">
                <h1>Search images react app</h1>
                <div className="right">
                    <Input type="text" name="searchInput" value="" placeholder="Enter text for search images"
                           onChange={this.handleInputSearchChange}/>
                    <InputRange name="quantity" min='1' max='4' value='1' onInput={this.handleInputRangeChange}/>
                    <Button type="button" text="Search at Google" onClick={this.handleClickButton}/>
                </div>
                <div className="left">
                    <ImagesList images={this.state.links} numOfColumns={this.state.numOfColumns}/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    links: PropTypes.array,
    searchValue: PropTypes.string,
    numOfColumns: PropTypes.number,
};

App.defaultProps = {
    links: [],
    searchValue: ``,
    numOfColumns: 1,
};


export default App;
