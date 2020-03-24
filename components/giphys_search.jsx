import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleSubmit(event) {
    const { fetchSearchGiphys } = this.props;

    event.preventDefault();

    fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    const { giphys } = this.props;
    return (
      <div>
        <h1>Giphy Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='search'
            placeholder='Enter a search term'
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type='submit' value='Submit'>
            Submit
          </button>
        </form>
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
