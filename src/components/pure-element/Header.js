
function Header({children , className , style , id}) {
  return (
    <header className={className} id={id} style={style}>
        {children}
    </header>
  )
}
export default Header