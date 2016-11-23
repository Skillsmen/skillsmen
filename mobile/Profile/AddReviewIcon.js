import React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import Router from '../navigation/Router'


const styles = StyleSheet.create({
  addReviewText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 20,
  },
});

const addReviewHandler = (navigator, name, userInfo, currentLoggedInUser) => {
  navigator.push(Router.getRoute('addReview', { name: name, navigator: navigator, userInfo: userInfo, currentLoggedInUser: currentLoggedInUser }))
}

const AddReviewIcon = ({isPeer, navigator, name, userInfo, currentLoggedInUser}) => {

  if (isPeer) {
    return (
      <Text style={styles.addReviewIcon} onPress={function(){addReviewHandler(navigator, name, userInfo, currentLoggedInUser)}}>
        <FontAwesome
          name="plus-circle"
          size={18}
          color="red"
        />
          <Text style={styles.addReviewText}> Add Review </Text>
      </Text>
    );
  }
  return (
    <Text></Text>
  );
};

export default AddReviewIcon;