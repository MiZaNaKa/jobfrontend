import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textInputBorderStyle: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderColor: '#CFCFCF',
        borderWidth: 0.25,
        shadowOpacity: 0.5,
        shadowRadius: 2.5,
        elevation: 2.3,
        padding:1,
        borderWidth: 0,
    }
});

export default styles;