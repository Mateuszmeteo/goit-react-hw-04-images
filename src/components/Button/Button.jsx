
import css from './button.module.css'

export const Button = ({onClick, children}) => {
    return (
        <button className={css.button} onClick={onClick}>{children}</button>

    )
}