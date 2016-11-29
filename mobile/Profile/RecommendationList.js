import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Recommendation from './Recommendation';
import AddReviewIcon from './AddReviewIcon';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  recommendations: {
    width: 0.9 * width,
    marginTop: 20,
  },
  recTitle: {
    fontSize: 20,
  },
});

// Eventually will get recommendations passed in through props and map
// over the info to create each individual recommendation
const RecommendationList = ({ isPeer, navigator, name, userInfo, reviews, currentLoggedInUser }) => {
  return (
    <View style={styles.recommendations}>
      <AddReviewIcon
        isPeer={isPeer}
        navigator={navigator}
        name={name}
        userInfo={userInfo}
        currentLoggedInUser={currentLoggedInUser}
      />
      {reviews ? reviews.map((review, i) =>
        <Recommendation
          comment={review.comment}
          rating={review.rating}
          ReviewFor={review.ReviewFor}
          ReviewFrom={review.ReviewFrom}
          createdAt={review.createdAt}
          reviewerName={review.reviewerName}
          reviewerImage={review.reviewerImage}
          key={i}
        />
      ) : (null)}
    </View>
  );
};

export default RecommendationList;
