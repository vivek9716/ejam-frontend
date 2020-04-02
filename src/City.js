import React from 'react';
import axios from 'axios';
import { Box, Button } from '@material-ui/core';
import Table from './Table';
import SelectBox from './SelectBox';
import Card from './Card';
import Loader from './Loader';

class City extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      city: {
        '':'Select Option',
        'Anchorage': 'Anchorage',
        'Phoenix': 'Phoenix',
        'Little Rock': 'Little Rock'
      },
      selectedCity: '',
      cityInfo:{},
      isLoading: false
    }
  }

  handleChange = (e) => {
      this.setState({selectedCity: e.target.value, cityInfo: {}});
  }

  getCityInfo = () => {
    const { selectedCity } = this.state;
    this.setState({isLoading: true});
    axios.get(`https://pumpkin-crumble-29513.herokuapp.com/?city=${selectedCity}`)
      .then(res => {
        const cityInfo = res.data;
        this.setState({ cityInfo, isLoading: false });
      })
  }

  showCityInfo = () => {
    const { cityInfo, selectedCity } = this.state;
      if (Object.keys(cityInfo).length && selectedCity) {        
        return (
          <div>
            <Card cityInfo = {cityInfo} />
            <br />
            <Table cityInfo = {cityInfo} />
          </div>
        )
      }
  }

  render() {
    const { city, selectedCity, isLoading } = this.state;    
    return (      
      <div>
          <Box my={4}>
            <SelectBox city = {city} setCity={this.handleChange} />
          </Box>
          <Box my={4}>
            <Button variant="contained" color="primary" disabled={ !selectedCity } onClick={ () => this.getCityInfo() } >GET INFO</Button>
          </Box>
          <Box my={4}>            
            {
              (isLoading == true) ? <Loader /> : this.showCityInfo()
            }
          </Box>      
      </div>
    );
  }
}

export default City;
