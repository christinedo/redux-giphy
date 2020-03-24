import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({
  giphys: state.giphys
});

const mapDispatchToProps = dispatch => ({
  fetchSearchGiphys: searchTerms => dispatch(fetchSearchGiphys(searchTerms))
});

const GiphysSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GiphysSearch);

export default GiphysSearchContainer;
