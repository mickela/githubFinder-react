import React from 'react';
import { Link } from 'react-router-dom';

export default function User({ login, avatar_url, html_url }) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card user-card text-center m-auto p-3">

                <div>
                    <img src={avatar_url} className="user-avatar" alt="user" />
                </div>

                <div>
                    <strong className="d-block my-3">{login}</strong>
                    <Link to={'users/' + login} className="btn btn-sm btn-dark" >More Info</Link>
                </div>
            </div>
        </div>
    )
}
