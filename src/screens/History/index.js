import { connect } from 'react-redux';
import History from './History';

const mapStateToProps = (state) => {
  const { history: { list } } = state;
  return {
    list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
