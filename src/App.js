import React, { Component } from 'react';
import Header from './components/header';
import FormBody from './components/form';
import Slots from './components/slots';
import Footer from './components/footer';
import $ from 'jquery'; 

class App extends Component {
  state = { 
    dataLength : 1,
    isFetched : false,
    pincode:'',
    date:'',
    dataSet: [],
    counters: [
      {
        'address': "J.L.N Marg, Delhi Gate, New Delhi 110001",
        'available_capacity': 137,
        'block_name': "Not Applicable",
        'center_id': 563048,
        'date': "12-05-2021",
        'district_name': "Central Delhi",
        'fee': "0",
        'fee_type': "Free",
        'from': "09:00:00",
        'lat': 28,
        'long': 77,
        'min_age_limit': 45,
        'name': "G.B.Pant Hospital DH SITE 2",
        'pincode': 110001,
        'session_id': "bf844a38-7fa2-4e66-b210-9df863b61c49",
        'slots': ["09:00AM-12:00PM", "12:00PM-03:00PM", "03:00PM-06:00PM", "06:00PM-09:00PM"],
        'state_name': "Delhi",
        'to': "21:00:00",
        'vaccine': "COVISHIELD",
      },
      {
        'address': "Khandsa Road, Gurugram, Gurgaon 122001",
        'available_capacity': 137,
        'block_name': "Not Applicable",
        'center_id': 111111,
        'date': "12-05-2021",
        'district_name': "Central Delhi",
        'fee': "0",
        'fee_type': "Free",
        'from': "09:00:00",
        'lat': 28,
        'long': 77,
        'min_age_limit': 45,
        'name': "Kathuriya Hospital",
        'pincode': 110001,
        'session_id': "bf844a38-7fa2-4e66-b210-9df863b61c49",
        'slots': ["09:00AM-12:00PM"],
        'state_name': "Delhi",
        'to': "21:00:00",
        'vaccine': "COVISHIELD",
      },
      {
        'address': "Dabua, Faridabad",
        'available_capacity': 137,
        'block_name': "Not Applicable",
        'center_id': 563048,
        'date': "12-05-2021",
        'district_name': "Central Delhi",
        'fee': "0",
        'fee_type': "Free",
        'from': "09:00:00",
        'lat': 28,
        'long': 77,
        'min_age_limit': 45,
        'name': "Dabua Hospital",
        'pincode': 110001,
        'session_id': "bf844a38-7fa2-4e66-b210-9df863b61c49",
        'slots': ["12:00PM-03:00PM", "06:00PM-09:00PM"],
        'state_name': "Delhi",
        'to': "21:00:00",
        'vaccine': "COVISHIELD",
      }
    ]
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    // let pincode = this.state.pincode
    let pincode = $('#pincode').val()
    let data;
    var dd = new Date($('#date').val()).getDate();
    var mm = new Date($('#date').val()).getMonth()+1; 
    var yyyy = new Date($('#date').val()).getFullYear();
    if(dd<10)  { dd='0'+dd;}
    if(mm<10) { mm='0'+mm; }
    let date  = `${dd}-${mm}-${yyyy}`;
    let url  = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`;
    await fetch(url)
    .then(function(response) { return response.json(); }) 
    .then(function(myJson) { 
        data = myJson.sessions
    });
    this.setState({ dataSet: data, dataLength : data.length, isFetched : true})
    console.log(this.state.dataSet);
  }

  render() { 
    return ( 
      <>
        <div className="container">
          <Header />
          <FormBody isFetched = {this.state.isFetched} dataSet={this.state.dataSet} dataLength={this.state.dataLength} onSubmit={this.handleSubmit}/>
          { 
            this.state.dataLength !== 0 && this.state.isFetched === true && <Slots dataSet={this.state.dataSet}/>
          }
          <Footer />
        </div>
      </>
     );
  }
}
 
export default App;