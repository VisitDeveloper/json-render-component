function P({children , className , style , id}) {
    return (
      <p className={className} style={style} id={id}>
          {children}
      </p>
    )
  }
export default P