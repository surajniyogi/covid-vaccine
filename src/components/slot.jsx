import React, { Component } from 'react';
import SlotsBtn from './buttons';

class Slot extends Component {
    state = {  }
    render() { 
        const { data } = this.props

        return ( 
            <>
                <div className="card borderRadius my-5">
                    <h5 className="card-header px-5 py-4 text-muted fw-bold">Session Details</h5>
                    <div className="card-body px-4 px-md-5 py-4">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-1">
                                <span className="position-relative">
                                    <img className="avatar-img" src="https://fabrx.co/muze/assets/img/pages/avatar30.png" alt="Avatars" />
                                    <span className="bg-success online"></span>
                                </span>
                            </div>
                            <div className="col-lg-11">
                                <small className="d-block text-gray-600">Center ID: {data.center_id}</small>
                                <h6 className="font-weight-normal">Hospital Name: {data.name}</h6>
                                <small className="d-block text-gray-600">Location: {data.address}</small>
                                <small className="d-block text-gray-600">From: {data.from}</small>
                                <small className="d-block text-gray-600">Available Capacity: {data.available_capacity}</small>
                                <small className="d-block text-gray-600">Minimum Age Limit: {data.center_id}</small>
                                <small className="d-block text-gray-600">Fee: Rs. {data.fee}({data.fee_type})</small>
                                <small className="d-block text-gray-600">Vaccine: <b>{data.vaccine}</b></small>
                                <br/>
                                <span className="mb-0">Available Slots</span>
                                <div>
                                    {data.slots.map(slotData => 
                                        <SlotsBtn slotData = {slotData} key={slotData} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Slot;