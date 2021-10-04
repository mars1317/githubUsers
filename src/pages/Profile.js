import React, {useContext, useEffect, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {GithubContext} from './../context/github/githubContext';
import {Repos} from './../components/Repos';
import Loader from './../components/Loader/Loader'
export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)

  const urlName = match.params.name

  useEffect( ()=> {
    getUser(urlName)
    getRepos(urlName)
  }, [])

  if (loading) {
    return <Loader/>
  }

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers, 
    following,
    public_repos, public_gists
  } = user

  return (
    <Fragment>
      <Link to="/" className="link-secondary link">Back</Link>
      <div className="card mb-4 mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img 
              src={avatar_url} 
              alt={name}
              style={{width: '200px'}}
              />
                <h1 className="fs-3 mt-4">{name}</h1>
                {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <Fragment>
                  <h3>Information</h3>
                  <p>{bio}</p>
                </Fragment>
              }

              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}

                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
              <div className="badge bg-primary">Subscribers: {followers}</div>
              <div className="badge bg-success">Subscribed to: {following}</div>
              <div className="badge bg-info">Public repositories: {public_repos}</div>
              <div className="badge bg-warning">Public gists: {public_gists}</div>
              <div className="row mx-auto">
              <a href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info w-25 mt-5"> Open profile
              </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <h1> Repositories:</h1>
      <Repos repos = {repos}></Repos>
    </Fragment>
  )
}