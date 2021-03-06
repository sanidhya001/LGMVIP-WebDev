const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <div className="Navbar">
            <ul>
                <li><a className="brand">Zippy</a></li>
                <button onClick={clicked}className="button button1">Get Data</button>
            </ul>
        </div>
    )
}
export default Navbar;