import React from 'react';
import Search from './Search';
import User from './User';
import { Consumer } from '../App';

export default function Landing() {
    return (
        <div>
            <Search/>
            <h3 className="text-center mb-5">Search result</h3>
            <div className="container">
                <div className="row">
                    <Consumer>
                        {(value) =>(
                            <>
                                {value.state.users.map(user =>(
                                    <User key={user.id} login={user.login} html_url={user.html_url} avatar_url={user.avatar_url} />
                                ))}
                            </>
                        )}
                    </Consumer>
                </div>
            </div>
        </div>
    )
}
