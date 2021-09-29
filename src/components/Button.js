import React from 'react';
import Logo from ".././img/Home Link_logo.jpg";

class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isAbout: true,
      isNews: false,
      isMembers: false,
      isContact: false
  };
}

handleClickAbout(){
  this.setState({isAbout: true});
  this.setState({isNews: false});
  this.setState({isMembers: false});
  this.setState({isContact: false});
}

handleClickNews(){
  this.setState({isAbout: false});
  this.setState({isNews: true});
  this.setState({isMembers: false});
  this.setState({isContact: false});
}

handleClickMembers(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: true});
  this.setState({isContact: false});
}

handleClickContact(){
  this.setState({isAbout: false});
  this.setState({isNews: false});
  this.setState({isMembers: false});
  this.setState({isContact: true});
}


    render(){
    return(
     <div className="button">
       <button onClick={()=>this.handleClickAbout()} className="button1" name="" type="submit" value="About">About</button>
       <button onClick={()=>this.handleClickNews()} className="button2" type="submit" value="News">News</button>
       <button onClick={()=>this.handleClickMembers()}  className="button3" type="submit" value="Members">Members</button>
       <button onClick={()=>this.handleClickContact()} className="button4" type="submit" value="Contact">Contact</button>
     </div>
    );
  }
}

export default Button;
