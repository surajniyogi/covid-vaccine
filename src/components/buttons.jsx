import React, { Component } from 'react';

class SlotsBtn extends Component {
    // state = {  }
    render() { 
        const { slotData } = this.props
        return ( 
            <>
                <button className="btn btn-sm btn-primary mt-1 mx-1">{slotData}</button>
            </>
         );
    }
}
 
export default SlotsBtn;