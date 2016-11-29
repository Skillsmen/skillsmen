import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';

// condenseAddress cuts off the address after the second comma
// hiding the state & country.

const condenseAddress = (address) => {
  let counter = 0;
  let result;
  address.split('').forEach((character, index) => {
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
      placeholder="Where?"
      id="location"
      minLength={1}
      autoFocus={false}
      listViewDisplayed="auto"
      fetchDetails={true}
      onPress={(data) => {
        const address = condenseAddress(data.description);
        Geocoder.setApiKey('AIzaSyAxN1YpDLDVGxkvu5WjCloa_CYYG_nLh7Q');
        Geocoder.getFromLocation(address).then(
          (json) => {
            const location = json.results[0].geometry.location;
            addJobDetail('location', address, location.lat, location.lng);
          },
          (error) => {
            console.log(error);
          },
        );
      }}
      query={{
        key: 'AIzaSyAxN1YpDLDVGxkvu5WjCloa_CYYG_nLh7Q',
        language: 'en',
        types: 'geocode',
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
      nearbyPlacesAPI="GooglePlacesSearch"
    />
  );
};

AutoCompleteLocation.propTypes = {
  methods: React.PropTypes.object.isRequired,
};

export default AutoCompleteLocation;
