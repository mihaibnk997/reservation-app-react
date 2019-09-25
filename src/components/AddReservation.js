import React, {Component} from 'react';

class AddReservation extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(
      this.reservation_idInput.value, 
      this.start_dateInput.value,
      this.end_dateInput.value,
      this.resource_idInput.value,
      this.owner_emailInput.value,
      this.commentsInput.value
      );

    // Clear input fields
    this.reservation_idInput.value = '';
    this.start_dateInput.value = '';
    this.end_dateInput.value = '';
    this.resource_idInput.value = '';
    this.owner_emailInput.value = '';
    this.commentsInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h3 className="f3 light-gray pa3 pointer">You can Add, Modify or Delete your Reservations</h3>
        <input type="number" placeholder="Reservation_id" ref={reservation_idInput => this.reservation_idInput = reservation_idInput} required/>
        <input type="date" placeholder="Start_date" ref={start_dateInput => this.start_dateInput = start_dateInput} required/>
        <input type="date" placeholder="End_date" ref={end_dateInput => this.end_dateInput = end_dateInput} required/>
        <input type="number" placeholder="Resource_id" ref={resource_idInput => this.resource_idInput = resource_idInput} required/>
        <input type="email" placeholder="Owner_email" ref={owner_emailInput => this.owner_emailInput = owner_emailInput} required/>
        <input placeholder="Comments" ref={commentsInput => this.commentsInput = commentsInput} required/>
        <button className= "grow link ph3 dib light-gray bg-navy">Add</button>
        <hr />
        <br />
      </form>
    );
  }
}

export default AddReservation;
