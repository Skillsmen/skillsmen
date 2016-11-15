import React from 'react';
import {
  View,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import ModularBannerIcon from './ModularBannerIcon';

const renderIcon = (name, size = 15, isSelected) =>
  (
    <FontAwesome
      name={name}
      size={size}
      color={isSelected ? '#395b91' : '#434343'}
    />
  );

const ModularBanner = ({ iconArr, propertyArr, iconSize, styles, iconStyles }) => {
  const banner = iconArr.map((icon, i) =>
    (
      <ModularBannerIcon
        key={i}
        Icon={icon}
        text={propertyArr[i]}
        renderIcon={renderIcon}
        iconSize={iconSize}
        iconStyles={iconStyles || {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      />
    ),
  );
  return (
    <View style={styles || { flexDirection: 'row' } && { backgroundColor: 'transparent' }}>
      { banner }
    </View>
  );
};
export default ModularBanner;
