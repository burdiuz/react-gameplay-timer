import { connect } from 'react-redux';
import History from './History';
import { getList } from 'src/store/history/selectors'

const mapStateToProps = (state) => ({
  list: getList(state),
});

export default connect(
  mapStateToProps,
)(History);
