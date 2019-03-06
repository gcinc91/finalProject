import React from "react";
import { CardUser } from "./CardUser";
import { GetData } from "../lib/getData";
import { Link } from "react-router-dom";

export class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // handleUser(e, id){
  //   console.log('handle user dentro')
  //   GetData.user(id)
  //   .then(console.log('todo bien jandleuser'))
  //   .catch(console.log('todo mal jandleuser'))

  // }

  componentDidMount() {
    console.log("Component did mount");
    GetData.allusers().then(data => {
      this.setState({ data:data.user });
    });
  }

  render() {
    const { data } = this.state;
    //console.log(data);
    return (
      <div>
        <h1>Users</h1>
        <div className='boxUsers' >
        {data.map((user) => (
            <Link
            to={`/user/${user._id}`}><CardUser className='boxUsers' key={user._id} props={user} /></Link>
           ))}

        </div>
        
      </div>
    );
  }
}