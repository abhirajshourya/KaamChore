import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colourPalette } from '../../styles/main';

const SafeAreaWithInsets = ({ children, styleProp }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: colourPalette.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  );
};

export default SafeAreaWithInsets;
