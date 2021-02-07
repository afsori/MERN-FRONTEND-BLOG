import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer, Header } from '../../component';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Home from '../Home';

function MainApp() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route path="/create-blog">
                        <CreateBlog />
                    </Route>
                    <Route path="/detail-blog">
                        <DetailBlog />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default MainApp
