import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const PictureOptions = () => {

    return (
        <div className="options-container">
            <div className="options-row">
                <div>
                    <img className="option" src='./bandage.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div>
                <div>
                    <img className="option" src='./bone_1.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div><div>
                    <img className="option" src='./drug_3.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div><div>
                    <img className="option" src='./drug_5.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div>
            </div>
            <div className="options-row">
                <div>
                    <img className="option" src='./stethoscope.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div><div>
                    <img className="option" src='./sticky.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div><div>
                    <img className="option" src='./stickys.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div><div>
                    <img className="option" src='./tablet pil_2.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div>
            </div>
        </div>
    );
};

export default PictureOptions;