import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const CustomToast = ({ message, header, isVisible, hideToast }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isVisible) {
      // Show the toast with animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      // Hide the toast after 2000 milliseconds (adjust as needed)
      const timeout = setTimeout(() => {
        hideToast();
      }, 2000);

      return () => clearTimeout(timeout);
    } else {
      // Hide the toast with animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.toast}>
        <View style={styles.errorContainer}>
            <Text style={styles.header}>{header}</Text>
        </View>
        <View style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  errorContainer:{
    padding: 8,
    backgroundColor: '#c0c0c0',
  },
  messageContainer:{
    backgroundColor: '#ebebeb',
    borderWidth: 0,
    paddingTop: 8,
    paddingHorizontal: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  container: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    top: 0,
    zIndex: 999,
  },
  toast: {
    flex: 1,
    width: '98%',
    height: 90,
    backgroundColor: '#ebebeb',
    marginHorizontal: 20,
    zIndex: 1000,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  message: {
    color: '#333333',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  header: {
    color: '#333333',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});


export default CustomToast;
