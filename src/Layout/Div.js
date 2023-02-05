
export function Div(props){

    const style = {
        padding: props.padding,
        backgroundColor: props.backgroundColor,
        height: props.height,
        width: props.width,
    }

    return(
        <div style={style} className={props.className}>
            {props.children}
        </div>
    )
}

export default Div;