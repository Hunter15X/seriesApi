import React, { Component } from 'react';
import { render } from '@testing-library/react';

class LoginSeries extends Component{

constructor(){
    super()
    this.state = {
        email: "",
        senha: ""
    }
}

inputHandler = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value}) 
}

singIn = async (e) => {
    e.preventDefault()

    const {email, senha} = this.state
    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, senha})

    } 

    console.log({ email, senha })

    try{
        const retorno = await fetch('http://localhost:3000/autenticar', params)
console.log(retorno)
        const usuario = await retorno.json()
console.log(usuario)
    }catch{
        console.log(e)
    }

}

    render(){
        return(
            <div>
                <div className="card">
                <div className="card-body">
                <form className="form-signin" onSubmit={this.singIn}>
                    <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" name="email" placeholder="Email address" required autofocus onChange={this.inputHandler}/>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" name="senha" placeholder="Password" required onChange={this.inputHandler}/>
                
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                </form>
                </div>
                </div>
            </div>
        )
    }

}

export default LoginSeries