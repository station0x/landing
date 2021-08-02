import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link onClick={()=> window.location = 'mailto:team@station0x.com'}>Contact</Link>
        </li>
        <li>
          <Link to="">About us</Link>
        </li>
        <li>
          <Link onClick={()=> window.open('https://docs.station0x.com/faq')}>FAQs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;