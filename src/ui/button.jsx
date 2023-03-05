const Button = props => {
  return (
    <button
      {...props}
      className={`rounded-lg px-4 py-2 border-4 hover:bg-brownLight border-[#2525297c] ${props.className}`}
      type={props.type}>
      {props.children}
    </button>
  )
}
export default Button
