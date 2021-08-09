import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DogDetail } from '../components/detail/DogDetail'
import { DogCreated } from '../components/dogCreated/DogCreated'
import { Home } from '../components/home/Home'
import { NavBar } from '../components/nav/NavBar'


export const AppRouter = () => {
    return (
        <div>
            <NavBar />
                <>
                    <Switch>
                        <Route exact path="/home" component={ Home } />
                        <Route path="/add" component={ DogCreated } />
                        <Route path="/detail/:id" component={ DogDetail } />

                        <Redirect to='/home' />
                    </Switch>

                </>            
        </div>
    )
}
