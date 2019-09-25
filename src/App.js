import React, {Component} from 'react';
import './App.css';

import Reservation from './components/Reservation';
import AddReservation from './components/AddReservation';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const reservations = [
  {
    reservation_id: 1,
    start_date: "2019-09-01",
    end_date: "2019-09-03",
    resource_id: 12,
    owner_email: 'owner1@gmail.com',
    comments: "no comments"
  },
  {
    reservation_id: 2,
    start_date: "2019-09-06",
    end_date: "2019-08-14",
    resource_id: 14,
    owner_email: 'test123@gmail.com',
    comments: "all good"
  }
];

localStorage.setItem('reservations', JSON.stringify(reservations));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservations : JSON.parse(localStorage.getItem('reservations'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentDidMount() {
    const reservations = this.getReservations();
    this.setState({ reservations });
  }

  getReservations(){
    return this.state.reservations;
  }

  onAdd(reservation_id, start_date, end_date, resource_id, owner_email, comments) {
    const reservations = this.getReservations();

    reservations.push({
      reservation_id,
      start_date,
      end_date,
      resource_id,
      owner_email,
      comments
    });

    this.setState({ reservations });
  }

  onDelete(reservation_id) {
    const reservations = this.getReservations();

    const filteredReservations = reservations.filter(reservation => {
      return reservation.reservation_id !== reservation_id;
    });
    // console.log(filteredReservations)
    
    this.setState( {reservations: filteredReservations });
  }

  onEditSubmit(reservation_id, start_date, end_date, resource_id, owner_email, comments, originalId) {
    let reservations = this.getReservations();

    reservations = reservations.map(reservation => {
      if (reservation.reservation_id === originalId) {
        reservation.reservation_id = reservation_id;
        reservation.start_date = start_date;
        reservation.end_date = end_date;
        reservation.resource_id = resource_id;
        reservation.owner_email = owner_email;
        reservation.comments = comments;
      }

      return reservation;
    })

    this.setState({ reservations });
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
                params={particlesOptions} />
        <h1 className="light-gray">Reservations Manager</h1>
        <Logo />
        <AddReservation
          onAdd={this.onAdd}
        />
        {
          this.state.reservations.map(reservation => {
            return (
              <Reservation
                key= {reservation.reservation_id}
                {...reservation}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
