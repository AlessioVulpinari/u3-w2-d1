const SingleComment = (props) => {
  return <li>{props.comment.comment + " - " + props.comment.rate}</li>
}
export default SingleComment
