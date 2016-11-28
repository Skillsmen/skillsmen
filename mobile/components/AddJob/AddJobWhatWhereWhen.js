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


const AddJobWhatWhereWhen = ({ styles, methods }) => {
  const userInput = (type, placeHolder) => {
    return (
      <View style={styles.inputBox}>
        <TextInput
          id={type}
          style={styles.input}
          autoFocus
          placeholder={placeHolder}
          onChangeText={text => methods.addJobDetail(type, text)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container} >
      <BackButton navigator={methods.navigator} />
      {userInput('title', 'What is the Project?')}
      {userInput('location', 'Where?')}
      <GooglePlacesAutocomplete
        placeholder='Where?'
        style={styles.input}
        id='location'
        minLength={1} // minimum length of text to search
        autoFocus={false}
        listViewDisplayed='auto'    // true/false/undefined
        fetchDetails={true}
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log('address: ', data.description);
          Geocoder.setApiKey('AIzaSyAxN1YpDLDVGxkvu5WjCloa_CYYG_nLh7Q'); // use a valid API key 
          Geocoder.getFromLocation(data.description).then(
            json => {
              var location = json.results[0].geometry.location;
              console.log(location.lat + ", " + location.lng);
            },
            error => {
              alert(error);
            }
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
