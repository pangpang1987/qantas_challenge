import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomepageView from './HomepageView';
import * as actions from './modules/homepage';

const mapStateToProps = state => ({
  ...state.homepage
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageView);
