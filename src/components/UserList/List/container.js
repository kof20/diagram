import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeUser } from "../../../store/actions/users.actions";
import component from "./component";

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ removeUser }, dispatch),
});

const mapStateToProps = state => ({
  users: state.users.users,
  listSchema: state.list.listSchema,
});

export default connect(mapStateToProps, mapDispatchToProps)(component);
