import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addUser } from "../../../store/actions/users.actions";
import component from "./component";

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addUser }, dispatch),
});

export default connect(null, mapDispatchToProps)(component);
