export default function Card({children}){
    const cardStyle = {
        width: '200px',
        height: '200px',
        border : '1.5px solid lightgrey',
        borderRadius: '25px',
        padding: '4px ',
        margin: '4 px ',
    }
    return(
        <div style={{cardStyle}}>
            {children}
        </div>
    )
}