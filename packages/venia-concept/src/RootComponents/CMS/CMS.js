import { createElement, Component } from 'react';
import Page from 'src/components/Page';
import CategoryList from 'src/components/CategoryList';
import Search from 'src/components/Search';

export default class CMS extends Component {

    render() {
        return (
            <Page>
                <Search />
                <CategoryList title="Shop by category" id={2} />
            </Page>
        );
    }
}
