import React, {Component} from 'react';

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    }

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    const { onDelete, reservation_id } = this.props;
    
    onDelete(reservation_id);
  }

  onEdit() {
    this.setState( { isEdit: true })
  }

  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(
      this.reservation_idInput.value, 
      this.start_dateInput.value,
      this.end_dateInput.value, 
      this.resource_idInput.value, 
      this.owner_emailInput.value, 
      this.commentsInput.value,  
      this.props.reservation_id
      );
    console.log(this.props.reservation_id)

    this.setState({ isEdit: false})
  }
  
  render() {
    const { reservation_id, start_date, end_date, resource_id, owner_email, comments } = this.props;

    return (
        <div>
          {
            this.state.isEdit
            ? (
              <form onSubmit={this.onEditSubmit}>
                <input type ="number" placeholder="Reservation_id" ref={reservation_idInput => this.reservation_idInput = reservation_idInput} defaultValue={reservation_id} />
                <input type="date" placeholder="Start_date" ref={start_dateInput => this.start_dateInput = start_dateInput} defaultValue={start_date}/>
                <input type="date" placeholder="End_date" ref={end_dateInput => this.end_dateInput = end_dateInput} defaultValue={end_date}/>
                <input type="number" placeholder="Resource_id" ref={resource_idInput => this.resource_idInput = resource_idInput} defaultValue={resource_id}/>
                <input type="email" placeholder="Owner_email" ref={owner_emailInput => this.owner_emailInput = owner_emailInput} defaultValue={owner_email}/>
                <input placeholder="Comments" ref={commentsInput => this.commentsInput = commentsInput} defaultValue={comments}/>
                <button className="grow link ph3 dib light-gray bg-navy">Save</button>
              </form>
            )
            : (
              <div className="white">
                  <span>{reservation_id}</span> 
                  {` | `}
                  <span>{start_date}</span>
                  {` | `}
                  <span>{end_date}</span>
                  {` | `}
                  <span>{resource_id}</span>
                  {` | `}
                  <span>{owner_email}</span>
                  {` | `}
                  <span>{comments}</span>
                  {` | `}
                  <button className="grow link ph3 dib light-gray bg-navy" onClick={this.onEdit}>Edit</button>
                  {` | `}
                  <button className="grow link ph3 dib light-gray bg-navy" onClick={this.onDelete}>Delete</button>

              </div>

            )
          }
          {/* <form class="pa4 black-80">
            <div class=''>
              <label for="name" class="f6 b db mb2">Name <span class="normal black-60">(optional)</span></label>
              <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
              <label for="name" class="f6 b db mb2">Name <span class="normal black-60">(optional)</span></label>
              <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
              <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small>
            </div>
          </form> */}
      </div>
    );
  }
}

export default Reservation;
