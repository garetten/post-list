import cl from './Modal.module.css';
 
function Modal({children,visible,setVisible}){

    const rootClasses = [cl.modal];
    if(visible){
        rootClasses.push(cl.active);
    }

    return(
        <div className={rootClasses.join(" ")} onClick={()=>setVisible(false)}>
            <div className={cl.modal_content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>

        </div>
    )
}

export default Modal;