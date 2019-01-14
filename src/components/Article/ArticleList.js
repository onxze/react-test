import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ArticleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        fetch('http://backend.local/jsonapi/node/article?fields[node--article]=uid,title')
        .then(result =>{
            if (result.status === 200) {
                return result.json();
            }
            else {
                this.setState(...{message: result.statusText});
                return [];
            }
        }).then(data => {
            this.setState({articles: data.data});
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const articles = this.state.articles;
        // return <ul>
        //     {articles.map(a => <li key={a.nid}><a href={this.props.match.url + '/' + a.nid}>{a.title}</a></li>)}
        // </ul>;
        return (
            <List component="nav">
                {articles.map(a =>
                    <ListItem button component="a" href={this.props.match.url + '/' + a.id}>
                        <ListItemText primary={a.attributes.title} />
                    </ListItem>
                )}
            </List>
        );
    }
}

export default ArticleList;
