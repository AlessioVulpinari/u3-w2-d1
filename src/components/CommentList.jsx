import SingleComment from "./SingleComment"

const CommentList = (props) => {
  return (
    <>
      {props.comments !== null ? (
        <ul key={props.elementId}>
          {props.comments.map((comment) => {
            return <SingleComment comment={comment} />
          })}
        </ul>
      ) : (
        console.log("Errore")
      )}
    </>
  )
}

export default CommentList
