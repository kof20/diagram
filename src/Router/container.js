import { connect } from "react-redux";

import component from "./component";

const mapStateToProps = state => ({
  loggedIn: state.account.loggedIn,
});

export default connect(mapStateToProps)(component);
