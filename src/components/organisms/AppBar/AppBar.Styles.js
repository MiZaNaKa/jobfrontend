import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    appBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding:15,
      width: '100%',
      // borderBottomColor: '#cfcfcf', // Add a black border at the bottom
      // borderBottomWidth: 1, // You can adjust the width as needed
    },
    titleFontFamily: {
      fontFamily: 'Poppins-Medium',
    },
    listRightItemIcon: {
      width: 24,
      height: 24,
      marginRight: 0,
    },
    HeaderBackButton: {
      marginLeft: 0,
      width: 20,
      height: 15,
    },
  });

export default styles;