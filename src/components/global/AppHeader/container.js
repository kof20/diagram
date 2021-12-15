import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import component from "./component";

import { logout } from "../../../store/actions/account.actions";

const mapStateToProps = state => ({
  loggedIn: state.account.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ logout }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
