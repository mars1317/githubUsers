import React, {Fragment, useContext} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from './../context/github/githubContext';
import Loader from '../components/Loader/Loader';
export const Home = () => {
  const {loading, users} = useContext(GithubContext)
  const cards = new Array(15)
  .fill('')
  .map((_, index)=> index)
  return (
    <Fragment>
      <Search />
    
      <div className="row">
        
        {loading ? <Loader/> :
        users.items ? 
     
        users.items.map((user=> {
          return (
            <div className="col-sm-4 mb-4 mt-4" key={user.id}>
              <Card user = {user}/>
            </div>
            )
          })) : null
          
        }
      </div>
    </Fragment>
  )
}