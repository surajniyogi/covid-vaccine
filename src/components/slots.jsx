import React, { Component } from 'react';
import Slot from './slot'
class Slots extends Component {
    state = {  }
    render() { 
        const { dataSet } = this.props
        return ( 
            <>
                {dataSet.map(data => 
                    <Slot 
                        data = {data}
                    />
                )}
            </>
         );
    }
}
 
export default Slots;