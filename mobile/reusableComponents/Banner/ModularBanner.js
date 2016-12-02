import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
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

const { width } = Dimensions.get('window');

const ModularBanner = ({ iconArr, propertyArr, iconSize, styles, iconStyles, editMode, editModeKeys, setUserInfoToUpdate, textBoxStyle, textStyle }) => {
  const defaultStyle = StyleSheet.create({
    textBox: {
      height: 40,
      width: width / iconArr.length,
      fontSize: 16,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 10,
      paddingRight: 10,
    },
  });

  const banner = iconArr.map((icon, i) =>
    (
      <ModularBannerIcon
        key={i}
        Icon={icon}
        text={propertyArr[i]}
        textStyle={textStyle}
        renderIcon={renderIcon}
        iconSize={iconSize}
        iconStyles={iconStyles || {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        editMode={editMode}
        editKey={editMode ? editModeKeys[i] : (null)}
        setUserInfoToUpdate={setUserInfoToUpdate}
        textBoxStyle={textBoxStyle || defaultStyle.textBox}
      />
    ),
  );
  return (
    <View style={styles || { flexDirection: 'row' }}>
      { banner }
    </View>
  );
};
export default ModularBanner;
