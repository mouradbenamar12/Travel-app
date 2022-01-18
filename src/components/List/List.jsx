import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = () => {

    const classes = useStyles();
    const [type, setType] = useState('restaurant');
    const [rating, setRating] = useState('0');
    const places = [
        {name: 'dubai'},
        {name: 'morocco'},
        {name: 'miami'},
        {name: 'mumbai'},
        {name: 'dubai'},
        {name: 'morocco'},
 
    ]

    return(
        <div className={classes.container}>
            <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurant'>Restaurants</MenuItem>
                    <MenuItem value='hotel'>Hotels</MenuItem>
                    <MenuItem value='attraction'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value='0'>All</MenuItem>
                    <MenuItem value='3'>Above 3</MenuItem>
                    <MenuItem value='4'>Above 4</MenuItem>
                    <MenuItem value='5'>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) =>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;