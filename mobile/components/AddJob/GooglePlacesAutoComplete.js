import React from 'react';
import { AutoCompleteModule } from 'react-native-google-places-autocomplete';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const GooglePlacesAutoComplete = () => {
  console.log('inside GooglePlacesAutoComplete!');
  return (
    <AutoCompleteModule />
  );
};

export default GooglePlacesAutoComplete;
