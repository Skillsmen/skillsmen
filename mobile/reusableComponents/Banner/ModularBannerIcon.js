import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const ModularBannerIcon = ({ text, Icon, iconSize, renderIcon, iconStyles }) =>
  (
    <View style={iconStyles || { justifyContent: 'space-around'}}>
      <Text style={{ backgroundColor: 'transparent' }} >
        { renderIcon(Icon, iconSize) }{ ' '.concat(text) }
      </Text>
    </View>
  );

export default ModularBannerIcon;
