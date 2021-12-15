import { connect } from "react-redux";

import component from "./component";

const mapStateToProps = state => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(component);
