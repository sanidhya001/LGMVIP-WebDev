const Loader = ({ show }) => {
    return (
        (show) ?
            <div className="loader"></div> : <h1>Hi There!!!</h1>
    )
}
export default Loader;