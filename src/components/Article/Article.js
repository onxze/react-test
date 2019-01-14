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
        const uuid = this.props.match.params.id;

        fetch('http://backend.local/jsonapi/node/article/' + uuid + '?fields[node--article]=uid,title,body,field_image')
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
            console.log(this.state.article.data.relationships);
            const my_val = article.data.attributes.body === undefined ? '' : article.data.attributes.body.processed;
            const imageField = article.data.relationships.field_image === undefined ? '' : article.data.relationships.field_image;
            return <article>
                <Title caption = {article.data.attributes.title}/>
                <Image field = {imageField}/>
                <Body text = {my_val}/>
            </article>
        }
        return '';
    }
}

export default Article;
