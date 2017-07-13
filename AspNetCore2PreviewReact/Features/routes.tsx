import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './Shared/Layout';
import { Home } from './Home/Home';
import { FetchData } from './SampleData/FetchData';
import { Counter } from './Counter/Counter';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={ FetchData } />
</Layout>;
