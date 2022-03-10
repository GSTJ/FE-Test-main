import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const BackArrow = ({onPress, light}) => {
  const imagePath = light
    ? require('../assets/images/whiteBackArrow.png')
    : require('../assets/images/backArrow.png');
  const styles = StyleSheet.create({
    arrow: {
      height: 20,
      width: 20,
    },

    arrowContainer: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 2,
    },
  });

  return (
    <TouchableOpacity style={styles.arrowContainer} onPress={onPress}>
      <Image resizeMode="contain" style={styles.arrow} source={imagePath} />
    </TouchableOpacity>
  );
};

export default BackArrow;
