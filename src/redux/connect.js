import { addResponse, changeResponse } from '../redux/actions';
import { getResponseById } from '../redux/selectors';

/*
 * connect function arguments
 */

export const mapStateToProps = (state, ownProps) => {
  const screenId = ownProps.route.name;
  const currentResponse = getResponseById(state, screenId);
  return { currentResponse };
};

export const mapDispatchToProps = { addResponse, changeResponse };
