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

  componentDidMount() {
    console.log("Component did mount");
    GetData.allusers().then(data => {
      this.setState({ data: data.user });
    });
  }

  handleChange(e) {
    GetData.searchTech(e.target.value)
      .then(data => this.setState({ data }))
      .catch(console.log("errol en la busqueda"));
  }

  render() {
    const { data } = this.state;
    //console.log(data);
    return (
      <div>
        <div className="titlePrinc">
          <h1> Users </h1>
        </div>
        <div className="containerBarra">
          <div className="barraBusqueda">
            <div className="labelBarra">
              <label> Filtra por usuario o tecnologia: </label>
            </div>
            <input
              type="text"
              className="input  is-focused "
              onChange={e => this.handleChange(e)}
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="boxUsers">
          {data.map(user => (
            <Link to={`/user/${user._id}`}>
              <CardUser className="boxUsers" key={user._id} props={user} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
