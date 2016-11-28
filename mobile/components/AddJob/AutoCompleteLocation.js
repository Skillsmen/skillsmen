import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';

const condenseAddress = (address) => {
  let counter = 0;
  let result;
  address.split('').forEach( (character, index) => {
    if (character === ',') {
      counter += 1;
    }
    if (counter === 2 && character === ',') {
      result = index;
    }
  });
  return address.split('').slice(0, result).join('');
};

const AutoCompleteLocation = (props) => {
  const addJobDetail = props.methods.addJobDetail;
  return (
    <GooglePlacesAutocomplete
      placeholder='Where?'
      id='location'
      minLength={1} // minimum length of text to search
      autoFocus={false}
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        const address = condenseAddress(data.description);
        Geocoder.setApiKey('AIzaSyAxN1YpDLDVGxkvu5WjCloa_CYYG_nLh7Q'); // use a valid API key 
        Geocoder.getFromLocation(address).then(
          (json) => {
            const location = json.results[0].geometry.location;
            console.log('address: ', address, 'location.lat: ', location.lat, 'location.lng:', location.lng, 'addJobDetail: ', addJobDetail);
            addJobDetail('location', address, location.lat, location.lng);
          },
          (error) => {
            console.log(error);
          },
        );
      }}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyAxN1YpDLDVGxkvu5WjCloa_CYYG_nLh7Q',
        language: 'en', // language of the results
        types: 'geocode', // default: 'geocode'
      }}
      styles={{
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      currentLocation={true}
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch'
    />
  );
};

export default AutoCompleteLocation;
