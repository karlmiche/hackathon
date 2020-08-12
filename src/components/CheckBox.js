import React, { useState }from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckBox = () => {
 
    const [state, setState] = useState({
        checkedA: true,
      });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
  };
    return (
        <div>
            <FormControlLabel
                control={<Checkbox 
                checked={state.checkedA} 
                onChange={handleChange} 
                name="checkedA" />}
                label="Secondary"
            />
        </div>
    );
};

export default CheckBox;