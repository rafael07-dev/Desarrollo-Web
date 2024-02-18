export function Header() {

    const showMenu = () => {
        const element = document.querySelector('.hideMenu');
        
        element.style.display = 'none';
    }

    return (
            <header className="siteHeader">
                <div className="logo">
                    <h1>Portafolio</h1>
                </div>

                <div className="nav-links">
                    <ul>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Download CV</a></li>
                    </ul>
                </div>

                <div className="menu">
                    <a onClick={showMenu} href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="40"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a>
                </div>
            </header>
        );
}