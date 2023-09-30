import React, {Component} from 'react';
import loading  from '../loading.gif';

class Spinner extends Component {
    render() {
        return(
            <div className='text-center my-5'>
                <img src={loading} alt='Loading...' />
            </div>
        );
    }
}

export default Spinner;