import React, { Component } from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: [],
        };
    }

    componentDidMount() {
        // console.log(this.props.id);
        const fid = this.props.id.target_id;
        fetch('http://backend.local/entity/file/' + fid + '?_format=json')
        .then(result =>{
            return result.json();
        }).then(data => {
            this.setState({image: data});
        })
    }

    render() {
        if (this.state.image.length !== 0) {
            // console.log(this.state.image.uri[0].url);
            let url = '';
            if (this.state.image.uri !== undefined) {
                url = "http://backend.local" + this.state.image.uri[0].url;
            }
            else {
                url = this.state.image.url;
            }
            // console.log(url);
            return <img src={url} alt={this.state.image.alt} />;
        }
        else {
            return '';
        }
    }
}

export default Image;