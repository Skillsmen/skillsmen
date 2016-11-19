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
import Router from '../Router'


const styles = StyleSheet.create({
  addReviewText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 20,
  },
});

const addReviewHandler = (navigator, name, userInfo) => {
  navigator.push(Router.getRoute('addReview', { name: name, navigator: navigator, userInfo: userInfo }))
}

const AddReviewIcon = ({isPeer, navigator, name, userInfo}) => {

  if (isPeer) {
    return (
      <Text style={styles.addReviewIcon} onPress={function(){addReviewHandler(navigator, name, userInfo)}}>
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