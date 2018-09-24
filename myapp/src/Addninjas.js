import React , {Component} from 'react';

class Addninjas extends Component {
    state = {
      name:null,
      age:null,
      belt:null
    }
    handle_onchange=(e)=>{
        this.setState({
           [e.target.id]:e.target.value
        })
    }
    handle_onsubmit=(e)=>{
        e.preventDefault()
        console.log(this.state);
        
    }
    render(){
     return(
       <div className='addninjas'>
       <form onSubmit={this.handle_onsubmit} >
       <label htmlFor="name">Name:</label>
       <input type="text" name="name" id="name" onChange={this.handle_onchange}/>
       <label htmlFor="age">Age</label>
       <input type="text" name="age" id="age" onChange={this.handle_onchange}/>
       <label htmlFor="belt">Belt</label>
       <input type="text" name="belt" id="belt" onChange={this.handle_onchange}/>
       <button>Submit</button>
       </form>
       </div>
     )
    }
}
export default Addninjas