import React from 'react';

const TableHead = () => {
  return (
    <div class="pa4">
        <div class="overflow-auto">
            <table class="f6 w-100 mw8 center" cellspacing="0">
            <thead>
                <tr class="stripe-dark">
                <th class="fw6 tl pa3 bg-white">Reservation_id</th>
                <th class="fw6 tl pa3 bg-white">Start Date</th>
                <th class="fw6 tl pa3 bg-white">End Date</th>
                <th class="fw6 tl pa3 bg-white">Resource_id</th>
                <th class="fw6 tl pa3 bg-white">Owner_email</th>
                <th class="fw6 tl pa3 bg-white">Comments</th>
                </tr>
            </thead>
            </table>
        </div>
    </div>
  );
}

export default TableHead;