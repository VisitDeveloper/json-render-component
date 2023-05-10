 const Button = ({style ,id , className , children}) =>{
    return (
        <button className={className} id={id} style={style}>
            {children}
        </button>
    )
}
export default Button