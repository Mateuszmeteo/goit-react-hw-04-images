

export const Button = ({onClick, children}) => {
    return (
        <button className="load-more" onClick={onClick}>{children}</button>

    )
}