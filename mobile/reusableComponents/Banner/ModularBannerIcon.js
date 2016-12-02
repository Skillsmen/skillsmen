import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

const ModularBannerIcon = ({ text, Icon, iconSize, renderIcon, iconStyles, editMode, editKey, setUserInfoToUpdate, textBoxStyle, textStyle }) => {
  if (editMode) {
    if (editKey === 'experience') {
      text = text.split(' ')[0];
    }
    // Must do form validation for numbers only
    const changeText = (input) => {
      if (editKey === 'experience' && isNaN(input)) {
        return;
      }
      setUserInfoToUpdate(editKey, input);
    };
    return (
      <View style={iconStyles}>
        <TextInput
          style={textBoxStyle}
          onChangeText={changeText}
          defaultValue={text}
        />
      </View>
    );
  }
  const txtStyle = textStyle ? textStyle : { backgroundColor: 'transparent'};
  return (
    <View style={iconStyles}>
      <Text style={txtStyle} >
        { renderIcon(Icon, iconSize) }{ ' '.concat(text) }
      </Text>
    </View>
  );
};

export default ModularBannerIcon;
