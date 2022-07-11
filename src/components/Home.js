import { Link } from 'react-router-dom';

const Home = () => { // : React.FC 

  return (
    <div>
      <h2>3D Themes by Metalab</h2>
      <nav>
        <ul>
          <li>
            <Link to="/joystick">(1). Joystick</Link>
          </li>
          <li>
            <Link to="/floating-island">(2). Floating Island</Link>
          </li>
          <li>
            <Link to="/fashion-item">(3). Fashion Item</Link>
          </li>
          <li>
            <Link to="/gallery">(4). Gallery</Link>
          </li>
          <li>
            <Link to="/comic-book">(5). Comic Book</Link>
          </li>
          <li>
            <Link to="/space-art">(6). Space Art</Link>
          </li>
          <li>
            <Link to="/colorful-space">(7). Colorful Space</Link>
          </li>
          <li>
            <Link to="/space-station">(8). Space Station</Link>
          </li>
          <li>
            <Link to="/connected-links">(9). Connected Links</Link>
          </li>
          <li>
            <a href="https://london-multiplay.herokuapp.com" target="_blank" rel="noreferrer">(10). Socket.io Multiplay</a>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Home;
