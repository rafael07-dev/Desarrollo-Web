export function aside() {

   
    const showMenu = () => {
        const element = document.querySelector('.hideMenu');
        
        element.style.display = 'block';
    }

    return(
            <aside className="hideMenu">
                <ul>
                    <li><a onClick={showMenu} href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Download CV</a></li>
                </ul>
            </aside>
    );
}