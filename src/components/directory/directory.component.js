import React from 'react';
import { withRouter } from 'react-router';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props){
        super();
        this.state = {
            sections : []
        }
    }
    
    componentDidMount(){
        console.log('Directory component loaded just now');
        //this function gets triggered when when the component is loaded
        // Call an API when the components mount

        //making cal with fetch api of JS
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(response => {
                this.setState({sections:response})
                console.log('I am inside the promise, looks like promise is resolved successfully')
                console.log(response)
                    
        })
        .catch(error => console.log(error))
        console.log('received response')
        console.log(this.state.sections)
    }

    render(){
        // console.log(this.props);
        return(
            <div className='directory-menu'>
            
                {
                    this.state.sections.map(({id, ...otherSectionProps})=>{
                        return(
                            <MenuItem key={id} {...otherSectionProps}/>
                        )
                    })
                }                            

            </div>
        )
    }
}

export default withRouter(Directory);