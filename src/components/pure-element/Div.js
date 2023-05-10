function Div({children , className , style , id , dir}) {
    return (
      <div className={className} style={style} id={id} dir={dir}>
          {children}
      </div>
    )
  }
export default Div