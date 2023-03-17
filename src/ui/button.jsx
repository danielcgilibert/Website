const Button = props => {
  return (
    <button
      {...props}
      className={`rounded-lg px-4 py-2 border-2 hover:bg-lightBrown border-lightGray ${props.className}`}
      type={props.type}>
      {props.children}
    </button>
  )
}
export default Button
