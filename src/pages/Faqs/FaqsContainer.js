import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FaqsView from './FaqsView';
import * as actions from './modules/faq';

const mapStateToProps = state => ({
  ...state.faq
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FaqsView);
