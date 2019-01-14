/**
 * @file
 * Retrieve image from server.
 */
import React, { Component } from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: [],
        };
    }

    componentDidMount() {
        const fid = this.props.field.data.id;
        fetch('http://backend.local/jsonapi/file/file/' + fid)
        .then(result =>{
            if (result.status === 200) {
                return result.json();
            }
            else {
                this.setState(...{message: result.statusText});
                return [];
            }
        }).then(data => {
            this.setState({image: data});
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.image.length !== 0) {
            let url = '';
            if (this.state.image.data.attributes.uri.url !== undefined) {
                url = "http://backend.local" + this.state.image.data.attributes.uri.url;
            }
            else {
                return '';
            }
            return <img src={url} alt={this.state.image.data.filename} />;
        }
        else {
            return '';
        }
    }
}

export default Image;