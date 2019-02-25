import React from "react";
import { CardUser } from "./CardUser";
import { GetData } from "../lib/getData";

export class AllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

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
        {data.map((e) => (
            <CardUser className='boxUsers' key={e._id} props={e} />
             
           ))}

        </div>
        
      </div>
    );
  }
}