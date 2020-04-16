import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav className=" navbar navbar-expand-lg navbar-danger bg-danger ">
                <Link className="navbar-brand text-light" to="/">
                    <img src="/images.png" style={{ width: '40px', borderRadius: '0.5rem' }} alt="logo"/>
                    {'  '}
                    <strong>GitHub Finder</strong>
                </Link>
            </nav>
        </div>
    )
}
