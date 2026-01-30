import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="bg-green-600">
            <nav className="flex justify-between mx-8 py-4">
                <ul>
                    <li className="hidden ml-10 text-neutral-50 md:block">
                          <Link to ='/collares' className="font-medium">Menu</Link>  

                    </li>
                </ul>
                
                <section className="flex justify-end items-center">
                    <>
                        <Link to ='/registro' className="btn-nav">Crear Cuenta</Link>
                        <Link to ='/iniciar-sesion' className="btn-nav ml-4">Iniciar Sesión</Link>
                    </>

                </section>

            </nav>
        </header>
       
    );
}

export default Header;
