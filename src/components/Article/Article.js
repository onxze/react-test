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
        const nid = this.props.nid;
        fetch('http://backend.local/node/' + nid +'?_format=json')
        .then(result =>{
            return result.json();
        }).then(data => {
            this.setState({article: data});
        })
    }

    render() {
        const article = this.state.article;
        if (article.length !== 0) {
            //console.log('Article');
            // console.log(article);
            //onsole.log(this.state.article.body[0].processed);
            const my_val = article.body[0].processed;
            // console.log(my_val);
            return <article>
                <Title caption = {article.title[0].value}/>
                <Image id = {article.field_image[0]}/>
                <Body text = {my_val}/>
            </article>
        }
        return '';
    }
}

export default Article;
