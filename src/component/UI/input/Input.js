import cl from "./Input.module.css"

function Input(props){
    return(
        <input {...props} className = {cl.my_input}></input>
    );

}

export default Input;