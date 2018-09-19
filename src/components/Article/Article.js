import React, { Component } from 'react';
import Title from '../Title/Title';
import Body from '../Body/Body';
import Image from '../Image/Image';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: [],
        };
    }

    componentDidMount() {
        const nid = this.props.match.params.id;

        fetch('http://backend.local/node/' + nid +'?_format=json')
        .then(result =>{
            if (result.status === 200) {
                return result.json();
            }
            else {
                this.setState(...{message: result.statusText});
                return [];
            }
        }).then(data => {
            this.setState({article: data});
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const article = this.state.article;
        if (article.length !== 0) {
            const my_val = article.body === undefined ? '' : article.body[0].processed;
            const imageId = article.field_image === undefined ? '' : article.field_image[0];
            return <article>
                <Title caption = {article.title[0].value}/>
                <Image id = {imageId}/>
                <Body text = {my_val}/>
            </article>
        }
        return '';
    }
}

export default Article;
