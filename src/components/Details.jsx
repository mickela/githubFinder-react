import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {
    state = {
        userData: {},
        loaded: false,
        repos: []
    }

    componentDidMount(){
        const username = this.props.match.params.username;

        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data =>{
            console.info(data)
            this.setState(()=>({ userData: data }))
        })
        .catch(err => console.error(err))

        fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(data =>{
            console.info(data)
            this.setState(()=>({ repos: data }))
        })
        .catch(err => console.error(err))
    }

    render() { 
        const { name, bio, blog, avatar_url, company, email, followers, following, hireable, html_url, location, public_gists, public_repos } = this.state.userData;
        return (
            <div className="container">
                <p className="bg-light">
                    <Link to="/">Back</Link>
                    {name}
                </p>
                <div className="card p-5">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={avatar_url} className="w-100" alt="avatar"/>
                            <a href={html_url} className="btn btn-danger btn-lg btn-block">view profile</a>
                        </div>
                        <div className="col-md-7">
                            <span className="badge badge-secondary">followers {followers} </span>
                            <span className="badge badge-danger">following {following} </span>
                            <span className="badge badge-warning">public gists {public_gists} </span>
                            <span className="badge badge-info">public repos {public_repos} </span>

                            <ul className="list-group">
                                <li className="list-group-item">Bio: {bio === null ? 'N/A' : bio} </li>
                                <li className="list-group-item">Email: {email === null ? 'N/A' : email} </li>
                                <li className="list-group-item">Company: {company === null ? 'N/A' : company} </li>
                                <li className="list-group-item">Blog / website: {blog === '' ? 'N/A' : blog} </li>
                                <li className="list-group-item">Hireable: {hireable ? 'True' : 'False'} </li>
                                <li className="list-group-item">location: {location === null ? 'N/A' : location} </li>
                            </ul>
                        </div>
                    </div>
                </div>

                Repositories
                {this.state.repos.map(({ id, html_url, name, license, language, labels_url, forks }) =>(
                    <div className="card my-5 p-3" key={id}>
                        <div className="row">
                            <div className="col-md-6">
                                <strong className="d-block">{name}</strong>
                                license: {license ? license.name : 'N/A'} <br/>
                                {labels_url}
                            </div>
                            <div className="col-md-3">
                                <span className="badge badge-info">stars </span>
                                <span className="badge badge-danger">{forks} forks</span>
                                <span className="badge badge-dark">language: {language} </span>
                            </div>
                            <div className="col-md-3">
                                <a href={html_url} className="btn btn-dark">View repo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Details
