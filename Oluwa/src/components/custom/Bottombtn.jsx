function BottomBtn({name, handleClick, selected}){
    return(
        <>
            <div style={{backgroundColor: selected ? '#242424' : 'white',
                 color: selected ? 'white':'black'}} className="bottombtn" onClick={()=> handleClick(name)}>
                <p>{name}</p>
            </div>
        </>
    )
}



export default BottomBtn;