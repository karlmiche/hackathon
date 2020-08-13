import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './PictureOptions.css';
import Grid from '@material-ui/core/Grid';

const PictureOptions = () => {

    return (
        <div className="options-container">
            <Grid container>
                <Grid item xs={6}>
                <div className="options-row">
                <div className="bandage">
                    <img className="option" src='./bandage.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div>
                <div className="bone">
                    <img className="option" src='./bone_1.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div>
                <div className="drug">
                    <img className="option" src='./drug_3.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div>
                <div className="drug-two">
                    <img className="option" src='./drug_5.png' />
                <FormControlLabel
                    control={<Checkbox 
                    name="checkedA" />}
                    label="Secondary"
                />
                </div>
            </div>
                </Grid>
                <Grid item xs={6}>
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
                </Grid>
            </Grid>
        </div>
    );
};

export default PictureOptions;