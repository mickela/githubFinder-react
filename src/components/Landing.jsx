import React from 'react';
import Search from './Search';
import User from './User';
import { Consumer } from '../App';
import Spinner from './Spinner';

export default function Landing() {
    return (
        <div>
            <Search/>
            <div className="container">
                <div className="row">
                    <Consumer>
                        {(value) =>(
                            <>
                                {value.state.loading ? <Spinner/> : ''}
                                {value.state.users.map(user =>(
                                    <User key={user.id} login={user.login} avatar_url={user.avatar_url} />
                                ))}
                            </>
                        )}
                    </Consumer>
                </div>
            </div>
        </div>
    )
}
