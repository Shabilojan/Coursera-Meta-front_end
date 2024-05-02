import React from 'react';
import logo from '../images/Logo .svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='logo'/>
                    <p>
                    We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
                    </p>

                </div>
                <div>
                    <h3> important links</h3>
                    <ul>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Menu</a></li>
                        <li><a href=''>Reservation</a></li>
                        <li><a href=''>Order online</a></li>
                        <li><a href=''>login</a></li>
                    </ul>
                </div>

                <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>Address: <br/> 223 Town city,USA</li>
                            <li>Phone: <br/> +940769853536</li>
                            <li>Email: <br/> littlelemon@gmail.com</li>
                        </ul>

                </div>

                <div>
                        <h3>social media links</h3>
                        <ul>
                        <li><a href=''>Facebook</a></li>
                        <li><a href=''>Instagram</a></li>
                        <li><a href=''>Twitter</a></li>
                        
                    </ul>

                </div>
            </section>
        </footer>
    );
}

export default Footer;
