function Navs({ handleNavigation }){
    return(
        <>
        <div className="navs">
            <ul>
                <li onClick={()=>handleNavigation('projects')}>Projects</li>
            </ul>
        </div>
        </>
    )
}

export default Navs;