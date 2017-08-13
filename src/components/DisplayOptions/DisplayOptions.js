import { connect } from "react-redux";
import Options from "./Options";
import { changeCount, changeSort } from "../../actions/display";

const mapStateToProps = state => {
  return {
    count: state.display.count,
    sort: state.display.sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCountChange: event => dispatch(changeCount(+event.target.value)),
    onSortChange: event => dispatch(changeSort(event.target.value))
  };
};

const DisplayOptions = connect(mapDispatchToProps, mapDispatchToProps)(Options);

export default DisplayOptions;
