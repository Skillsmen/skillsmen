import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import Recommendation from './Recommendation';
import AddReviewIcon from './AddReviewIcon'

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  recommendations: {
    width: 0.9 * width,
    marginTop: 20,
  },
  recTitle: {
    fontSize: 20,
  },
})

// Eventually will get recommendations passed in through props and map
// over the info to create each individual recommendation
const RecommendationList = ({ isPeer, navigator, name, userInfo, reviews, currentLoggedInUser }) => {
  if (reviews) {
    return (
      <View style={styles.recommendations}>
        <Text style={styles.recTitle}>
          Recommendations
          <View style={{width: 25, height: 25, justifyContent: 'flex-end'}} >
          </View>
          <AddReviewIcon 
            isPeer={isPeer} 
            navigator={navigator} 
            name={name}
            userInfo={userInfo}
            currentLoggedInUser={currentLoggedInUser}
          />
        </Text>
        {reviews.map((review, i) => 
          <Recommendation 
            comment={review.comment} 
            rating={review.rating}
            ReviewFor={review.ReviewFor}
            ReviewFrom={review.ReviewFrom}
            createdAt={review.createdAt}
            reviewerName={review.reviewerName}
            reviewerImage={review.reviewerImage}
            key={i}/> 
        )}
      </View>
    )
  } else {
    return (
      <View style={styles.recommendations}>
        <Text style={styles.recTitle}>
          Recommendations
          <View style={{width: 25, height: 25, justifyContent: 'flex-end'}} >
          </View>
          <AddReviewIcon 
            isPeer={isPeer} 
            navigator={navigator} 
            name={name}
            userInfo={userInfo}
          />
        </Text>
      </View>
    )
  }
}

export default RecommendationList;
