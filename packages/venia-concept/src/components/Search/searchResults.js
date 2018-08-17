import { createElement, Component } from 'react';


export default class SearchResults extends Component {
  constructor(props){
    super(props)
  }

  render() {
    if (this.props.data.products.items.length == 0) return <div> No results </div>
    return (
      <div>
      {
        this.props.data.products.items.map((item) => {
          return <li key={item.id}>{ item.name } </li>
        })
      }
      </div>
    );
  }
}
