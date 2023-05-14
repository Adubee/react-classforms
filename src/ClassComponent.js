import { Component } from "react";
import logo from './welcome.jpg'



class ClassComponent extends Component {
   state = {
      myState: [
         {
            name:'Adubee',
            email:'adubeeinc@gmail.com',
            password: '156320'
         }
      ]
   }
      
   handleClick = (e) => {
      e.preventDefault()
      const temp = {
         name:e.target.name.value,
         email:e.target.email.value,
         password:e.target.password.value,
      }
      this.setState({myState:[...this.state.myState, temp]})
      e.target.name.value = ''
      e.target.email.value = ''
      e.target.password.value = ''
   }
   handleChange = (e) => {
   }
   render() {
      const val = this.state.myState.map( (item)=>{
         return(
            console.log(item.name, item.email, item.password)
         )
      } )
      return (
         <div className="container">
            <div className="card">
               <div className="card-image">	
                  <h2 className="card-heading">
                     Get started
                     <small>Let us create your account</small>
                  </h2>
               </div>

               <form className="card-form" onSubmit={this.handleClick} >
                  <div className="input">
                     <input type="text" className="input-field" name="name"  required/>
                     <label className="input-label">Full name</label>
                  </div>
                  <div className="input">
                     <input type="email" className="input-field" name="email" required/>
                     <label className="input-label">Email</label>
                  </div>
                  <div className="input">
                     <input type="password" className="input-field" name="password" required/>
                     <label className="input-label">Password</label>
                  </div>
                  <div className="action">
                     <button className="action-button">SignUp</button>
                  </div>
               </form>
               <div className="card-info">
                  <p>By signing up you are agreeing to our 
                     <a href="#">Terms and Conditions</a></p>
               </div>
            </div>
         </div>
      )
  }
}

export default ClassComponent;
