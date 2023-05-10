function Span({children , className , style , id , dir}) {
    return (
      <span className={className} style={style} id={id} dir={dir}>
          {children}
      </span>
    )
  }
export default Span