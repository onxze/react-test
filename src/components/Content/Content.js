import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Article from '../Article/Article';
import ArticleList from '../Article/ArticleList';

const Content = ({ match }) => {
    return (
        <Switch>
            <Route path={match.url + '/:id'} component={Article} />
            <Route path={match.url} component={ArticleList} />
        </Switch>
    )
}

export default Content;
