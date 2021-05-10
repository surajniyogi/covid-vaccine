import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class FormBody extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() { 
        const { onSubmit, pincode, date, dataLength } = this.props

        return ( 
            <React.Fragment>
                <div className="card col-lg-12 bg-primary mt-5 p-5 borderRadius">
                    <div className="row">
                        <div className="col-lg-6 text-white p-3 ml-2">
                            <h1 className="fw-bolder mb-4" style={{'fontSize':'3.5rem'}}>Search COVID <br />vaccine slots <br />near you</h1>
                            <p className="mb-0">It takes less than a minute!</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="col-lg-10 card bg-light float-end borderRadius">
                                <Form className="p-4">
                                    <Form.Group controlId="pincode">
                                        <Form.Label className="text-muted">Pincode</Form.Label>
                                        <Form.Control 
                                            type="number"
                                            value={pincode}
                                            onChange={e => this.setState({ pincode : e.target.value })} 
                                            className="dateSpinner" 
                                            placeholder="Enter 6-digit code here" 
                                            as="input"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="date" className="pt-5">
                                        <Form.Label className="text-muted">Date</Form.Label>
                                        <Form.Control 
                                            type="date" 
                                            value={date}
                                            onChange={e => this.setState({ date: e.target.value })}  
                                            className="dateSpinner" 
                                            placeholder="dd-mm-yyyy" />
                                    </Form.Group>

                                    { 
                                        dataLength === 0 && <Form.Group controlId="formBasicCheckbox">
                                                <Form.Text className="text-danger">
                                                    Sorry, but no slots are available at this pincode on the selected date.
                                                </Form.Text>
                                            </Form.Group> 
                                    }

                                    <Button variant="primary" onClick={onSubmit} type="submit" className="col-lg-12 my-3">
                                        Search Now
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default FormBody;