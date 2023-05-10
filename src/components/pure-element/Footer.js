function Footer({children , className , style , id}) {
    return (
      <footer className={className} id={id} style={style}>
          {children}
      </footer>
    )
  }
export default Footer