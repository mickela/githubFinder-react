import React, { Component } from 'react';
import { Consumer } from '../App';

export class Search extends Component {
    state = {
        username: '',
    }

    change = e =>{
        const { value, name } = e.target;
        this.setState(()=>({ [name]: value }))
    }

    render() {
        const { username } = this.state;
        return (
            <Consumer>
                {value =>(
                    <>
                        <div className="p-5 mt-3">
                            <form onSubmit={(e)=> value.search(username, e)}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.change} placeholder="Search Users..." />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-block btn-dark" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </Consumer>
        )
    }
}

export default Search;



// {/* <title>GitHub API v3 | GitHub Developer Guide</title>
// <meta property="og:url" content="https://developer.github.com/v3/" />
// <meta property="og:site_name" content="GitHub Developer" />
// <meta property="og:title" content="GitHub API v3" />
// <meta property="og:description" content="Get started with one of our guides, or jump straight into the API documentation." />
// <meta property="og:type" content="website" />
// <meta property="og:author" content="https://www.facebook.com/GitHub" />
// <meta property="og:image" content="https://og.github.com/logo/github-logo@1200x1200.png" />
// <meta property="og:image:width" content="1200" />
// <meta property="og:image:height" content="1200" />
// <meta property="og:image" content="https://og.github.com/mark/github-mark@1200x630.png" />
// <meta property="og:image:width" content="1200" />
// <meta property="og:image:height" content="630" />
// <meta property="og:image" content="https://og.github.com/octocat/github-octocat@1200x630.png" />
// <meta property="og:image:width" content="1200" />
// <meta property="og:image:height" content="630" />
// <meta property="twitter:card" content="summary_large_image" />
// <meta property="twitter:site" content="@github" />
// <meta property="twitter:site:id" content="13334762" />
// <meta property="twitter:creator" content="@githubapi" />
// <meta property="twitter:creator:id" content="@539153822" />
// <meta property="twitter:title" content="GitHub API v3" />
// <meta property="twitter:description" content="Get started with one of our guides, or jump straight into the API documentation." />
// <meta property="twitter:image:src" content="https://og.github.com/logo/github-logo@1200x1200.png" />
// <meta property="twitter:image:width" content="1200" />
// <meta property="twitter:image:height" content="1200" /> */}