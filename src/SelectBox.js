import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();  
  const [city, setCity] = React.useState('');

  const handleChange = (event) => {
    setCity(event.target.value);    
    props.setCity(event);
  };
    
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
        >
        {
            Object.keys(props.city).map((city, index) => <MenuItem key={index} value={city}>{city}</MenuItem>)
        }       
        </Select>
      </FormControl>      
    </div>
  );
}
