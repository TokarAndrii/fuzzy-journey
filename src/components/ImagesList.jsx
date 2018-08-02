import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery';
import './ImageList.css'

export default class ImagesList extends Component {


    render() {


        return (

            <div>
                {this.props.images.length > 0 ? (
                        <div>
                            <h2 className="title">Quantyty of images: {this.props.images.length}</h2>
                            <Gallery photos={this.props.images} columns={this.props.numOfColumns}></Gallery>
                        </div>)
                    : (null)}
            </div>

        )

    }
}

ImagesList.propTypes = {
    images: PropTypes.array,
    numOfColumns: PropTypes.number,
};

ImagesList.defaulProps = {
    images: [],
    numOfColumns: 1,
};