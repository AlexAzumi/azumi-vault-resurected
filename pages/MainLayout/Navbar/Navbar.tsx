import React, { FC, MouseEventHandler } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHome,
  faEnvelope,
  faCodeBranch,
  faProjectDiagram,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

const CustomNavbar: FC = () => {
  // State
  const [isSticky, setIsSticky] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(true);

  /**
   * Go to element with smooth animation
   * @param event - onClick event
   * @param id - Element ID
   */
  const goToElement = (event: React.MouseEvent, id: string) => {
    // Prevent default
    event.preventDefault();
    // Get element
    const element = document.getElementById(id);
    // Check element
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Check collapse status
      if (!collapsed) {
        setCollapsed(true);
      }
    }
  };

  /**
   * Hook that returns the previous and current position of the window
   */
  useScrollPosition(({ prevPos, currPos }) => {
    // Check if the user scroll enough to stick the navbar to the top
    if (prevPos.y > currPos.y && currPos.y < -80) {
      setIsSticky(true);
    } else if (prevPos.y < currPos.y && currPos.y > -80) {
      setIsSticky(false);
    }
  });

  return (
    <Navbar
      className={`p-3 p-md-2 ${
        isSticky ? 'shadow sticky-top' : 'bg-transparent'
      }`}
      bg='dark'
      variant='dark'
      expand='md'
      expanded={!collapsed}
    >
      <Navbar.Toggle
        className='ml-auto'
        aria-controls='basic-navbar-nav'
        onClick={() => setCollapsed(!collapsed)}
      />
      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-0 text-center mb-2 mb-md-0'
            href='#home'
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
              goToElement(event, 'home')
            }
          >
            <FontAwesomeIcon className='mr-2' icon={faHome} />
            Inicio
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-1 text-center mb-2 mb-md-0'
            href='#about'
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
              goToElement(event, 'about')
            }
          >
            <FontAwesomeIcon className='mr-2' icon={faAddressCard} />
            Sobre mí
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-2 text-center mb-2 mb-md-0'
            href='#projects'
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
              goToElement(event, 'projects')
            }
          >
            <FontAwesomeIcon className='mr-2' icon={faProjectDiagram} />
            Proyectos
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-3 text-center mb-2 mb-md-0'
            href='#repositories'
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
              goToElement(event, 'repositories')
            }
          >
            <FontAwesomeIcon className='mr-2' icon={faCodeBranch} />
            Repositorios
          </Nav.Link>
          <Nav.Link
            className='rounded-pill px-3 mx-0 mx-md-1 fade-top-4 text-center mb-2 mb-md-0'
            href='#contact'
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
              goToElement(event, 'contact')
            }
          >
            <FontAwesomeIcon className='mr-2' icon={faEnvelope} />
            Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
