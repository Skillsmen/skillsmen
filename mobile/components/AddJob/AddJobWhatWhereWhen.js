import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constants/Colors';
import BackButton from '../../reusableComponents/BackButton';
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

const AddJobWhatWhereWhen = ({ styles, methods }) => {
  const userInput = (jobType, placeHolder) => {
    return (
      <View style={styles.inputBox}>
        <TextInput
          id={jobType}
          style={styles.input}
          autoFocus
          placeholder={placeHolder}
          onChangeText={text => methods.addJobDetail(jobType, text)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container} >
      <BackButton navigator={methods.navigator} />
      {userInput('title', 'What is the Project?')}
      <GooglePlacesAutocomplete
        placeholder='Where?'
        style={styles.input}
        id='location'
        minLength={1} // minimum length of text to search
        autoFocus={false}
        listViewDisplayed='auto'    // true/false/undefined
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          const address = condenseAddress(data.description);
          console.log('data: ', data)
          Geocoder.setApiKey('AIzaSyAxN1YpDLDVGxkvu5WjCloa_CYYG_nLh7Q'); // use a valid API key 
          Geocoder.getFromLocation(address).then(
            (json) => {
              const location = json.results[0].geometry.location;
              // console.log('lng: ', location.lng);
              // console.log('address ', address);
              // console.log('methods: ', methods);
              methods.addJobDetail('location', address, location.lat, location.lng);
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
      <View>
        <TouchableOpacity style={styles.bttn} onPress={() => methods.nextScene('addTimeFrame', { styles, methods, time: 'from' })}>
          <Text style={{ color: colors.primary }}> NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;
