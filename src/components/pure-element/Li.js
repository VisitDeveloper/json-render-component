function Li({children , className , style , id}) {
    return (
      <li className={className} style={style} id={id}>
          {children}
      </li>
    )
  }
export default Li