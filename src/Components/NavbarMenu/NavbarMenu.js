import React, {useState} from 'react'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavbarMenu.css'
const NavbarMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
    const [size, setsize] = useState(false)
    const changeSize = () => {
        if(window.scrollY >= 95) {
            setsize(true)
        } else {
            setsize(false)
        }
    }
    window.addEventListener("scroll", changeSize)

  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className='Navbar-menu shadow' bg='light' fixed='top'>
        <Container fluid>
        <Navbar.Brand as={Link} to="/"  className={size ? "navbar-logo img navbar-logo-size img" : "navbar-logo img "}><img src='images/main-logo.png' alt='main-shreeji-logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } style={{color:'#299AEF',transform:'Scale(1.3)'}}/></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" eventKey={2} onClick={closeMobileMenu}><i className="fas fa-home"></i></Nav.Link>
            <NavDropdown title="GENERAL" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to='/Cleanings-and-exams' eventKey={2} onClick={closeMobileMenu}>Cleanings & Exams <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/White_Fillings' eventKey={2} onClick={closeMobileMenu}>White Fillings <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Emergency-Care' eventKey={2} onClick={closeMobileMenu}>Emergency Care <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Root_Canal' eventKey={2} onClick={closeMobileMenu}> Root Canals <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Porcelain-Crown' eventKey={2} onClick={closeMobileMenu}>Porcelain Crowns <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Holistic-dentistry' eventKey={2} onClick={closeMobileMenu}>Holistic Dentistry <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        
    </NavDropdown>
    <NavDropdown title="COSMETIC" id="collasible-nav-dropdown"  >
        <NavDropdown.Item as={Link} to='/Dental-Veneers' eventKey={2} onClick={closeMobileMenu}>Dental Veneers<i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Dental-Crown' eventKey={2}  onClick={closeMobileMenu}>Dental Crown<i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Inlays-and-Onlays' eventKey={2}  onClick={closeMobileMenu}>Inlays and Onlays <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Dental-Bonding'eventKey={2}  onClick={closeMobileMenu}>Dental Bonding <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Dental-Implants'eventKey={2}  onClick={closeMobileMenu}>Dental Implants <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="SURGICAL" id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to='/Root-Canal-Therapy' eventKey={2}  onClick={closeMobileMenu}>Root canal therapy<i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Wisdom-Tooth-Extraction'eventKey={2}  onClick={closeMobileMenu}>Wisdom tooth extraction<i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Surgical-Dental-implants'eventKey={2}  onClick={closeMobileMenu}>Dental implants<i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Reconstructive-procedures'eventKey={2}  onClick={closeMobileMenu}>Reconstructive procedures<i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="KIDS DENTISTRY" id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to='/Tooth-colored-fillings-for-kids' eventKey={2}  onClick={closeMobileMenu}>Tooth Colored Filling <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Cleaning-And-Prevention'eventKey={2}  onClick={closeMobileMenu}>Cleaning & Prevention <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Tooth-Extraction' eventKey={2}  onClick={closeMobileMenu}>Extraction <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Sealants'eventKey={2}  onClick={closeMobileMenu}>Sealants <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/Kids-Emergency-Dental'eventKey={2}  onClick={closeMobileMenu}>Emergencies <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#review" onClick={closeMobileMenu}>REVIEWS</Nav.Link>
    <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to='/Video-Gallery' eventKey={2}  onClick={closeMobileMenu}>Our Video <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/PhotoGallery' eventKey={2}  onClick={closeMobileMenu}>Photo Gallery <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='#doctor' eventKey={2}  onClick={closeMobileMenu}>About Doctor <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/About-clinic' eventKey={2}  onClick={closeMobileMenu}>About Clinic <i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='#contactus' eventKey={2}  onClick={closeMobileMenu}>Contact Us<i className="fas fa-arrow-circle-right"></i></NavDropdown.Item>
    </NavDropdown>
    <Nav.Link as={Link} to='/Book-Online' className='btn btn-primary text-dark' eventKey={2}  onClick={closeMobileMenu}>BOOK ONLINE</Nav.Link>
    </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavbarMenu
