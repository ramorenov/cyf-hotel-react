import React, { Component } from "react";
import moment from "moment";

class SearchResult extends Component {
  constructor(results) {
    super();
    this.results = results;
  }

  render() {
    const data = this.props.results.map(client => {
      let checkin = moment(client.checkInDate);
      let checkout = moment(client.checkOutDate);
      let stayingdays = checkout.diff(checkin, "days");
      return (
        <tr>
          <td>{client.id}</td>
          <td>{client.title}</td>
          <td>{client.firstName}</td>
          <td>{client.surname}</td>
          <td>{client.email}</td>
          <td>{client.roomId}</td>
          <td>{client.checkInDate}</td>
          <td>{client.checkOutDate}</td>
          <td>{stayingdays}</td>
        </tr>
      );
    });

    return (
      <div classNave="table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">First name</th>
              <th scope="col">Surname</th>
              <th scope="col">email</th>
              <th scope="col">room id</th>
              <th scope="col">check in date</th>
              <th scope="col">check out date</th>
              <th scope="col">staying days</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
            {data}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResult;
