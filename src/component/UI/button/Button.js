
import cl from "./Button.module.css";

function Button({children, ...props}){
    
    return(
        <button {...props} className={cl.my_button}>{children}</button>
    );

}

export default Button;