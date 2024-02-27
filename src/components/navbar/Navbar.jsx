import "./navbar.css";
import {Search, Person, Chat, Notifications} from "@mui/icons-material";
const Navbar = () => {
    return (
       <div className="navbarContainer">
        <div className="navbarLeft">
        <span className="logo">GeniusBook</span>
        </div>
        <div className="navbarCenter">
            <div className="searchbar">                
            <Search className="searchIcon"/>
            <input placeholder="Search for friend, post or video" className="searchInput" />
            </div>
        </div>
        <div className="navbarRight">       
            <div className="navbarLinks">
                <span className="navbarLink">Homepage</span>
                <span className="navbarLink">Timeline</span>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconItem">
                <Person/>
                <span className="navbarIconBadge">5</span>
                </div>
                <div className="navbarIconItem">
                <Chat/>
                <span className="navbarIconBadge">8</span>
                </div>
                <div className="navbarIconItem">
                <Notifications/>
                <span className="navbarIconBadge">3</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg " alt="" className="navbarImg" />
        </div>
       </div>
    );
}

export default Navbar;
