import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

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
            this.setState(()=>({ userData: data }))
        })
        .catch(err => console.error(err))

        fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(data =>{
            this.setState(()=>({ repos: data, loaded: true }))
        })
        .catch(err => console.error(err))
    }

    render() { 
        const { name, bio, blog, avatar_url, company, email, followers, following, hireable, html_url, location, public_gists, public_repos } = this.state.userData;
        if(this.state.loaded){
            
            return (
                <div className="container">
                    <p className="bg-light p-3">
                        <small><Link to="/">Back to search</Link></small>
                    </p>
                    <div className="card p-5 shadow-sm">
                        <div className="row">
                            <div className="col-md-5">
                                <img src={avatar_url} className="w-100 img-thumbnail" alt="avatar"/>
                                <a href={html_url} target="_blank" className="btn btn-danger btn-lg btn-block mb-3">{name || this.props.match.params.username}</a>
                            </div>
                            <div className="col-md-7">
                                <span className="badge badge-secondary">followers {followers} </span> {'  '}
                                <span className="badge badge-danger">following {following} </span> {'  '}
                                <span className="badge badge-warning">public gists {public_gists} </span> {'  '}
                                <span className="badge badge-info">public repos {public_repos} </span>
    
                                <ul className="list-group mt-5 shadow-sm">
                                    <li className="list-group-item">Username: {this.props.match.params.username} </li>
                                    <li className="list-group-item">Bio: {bio === null ? 'N/A' : bio} </li>
                                    <li className="list-group-item">Email: {email === null ? 'N/A' : email} </li>
                                    <li className="list-group-item">Company: {company === null ? 'N/A' : company} </li>
                                    <li className="list-group-item">Blog / website: {blog === '' ? 'N/A' : blog} </li>
                                    <li className="list-group-item">Hireable: {hireable ? 'True' : 'False'} </li>
                                    <li className="list-group-item">location: {location === null ? 'N/A' : location} </li>
                                    <li className="list-group-item"> <a href={html_url}>Visit Profile</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <h3 className="mt-3">Repositories</h3> <hr/>
                    {this.state.repos.length > 0 ? 
                        this.state.repos.map(({ id, html_url, name, license, language, description, forks }) =>(
                            <Repo key={id} html_url={html_url} name={name} user={this.props.match.params.username} license={license} language={language} description={description} forks={forks} />
                        ))
                        :
                        <h1 className="text-center py-5">No Public Repositories</h1>
                    }
                </div>
            )

        }
        else{
            return <Spinner />
        }
        
    }
}

export default Details;


const Repo = ({ name, license, description, forks, language, html_url }) =>{
    return(
        <div className="card my-5 p-3 border-0 shadow">
            <div className="row">
                <div className="col-md-6">
                    <strong className="d-block">{name}</strong>
                    <small>{description}</small> <br/>
                    <small>license: {license ? license.name : 'N/A'}</small>
                </div>
                <div className="col-md-3">
                    <span className="badge badge-danger">{forks} forks</span> {'  '}
                    <span className="badge badge-dark">language: {language} </span>
                </div>
                <div className="col-md-3">
                    <a href={html_url} className="btn btn-dark">View repo</a>
                </div>
            </div>
        </div>
    )
}