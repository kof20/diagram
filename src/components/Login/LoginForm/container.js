import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { login } from "../../../store/actions/account.actions";
import component from "./component";

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ login }, dispatch),
});

export default connect(null, mapDispatchToProps)(component);
