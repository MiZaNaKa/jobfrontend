import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    borderTextInputStyle : {
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        height: 50, 
        paddingHorizontal: 14,
        borderWidth: 1, 
        borderColor: '#333333', 
        borderRadius: 8,
    },
    prifixIconAndTextInputStyle: {
        flexDirection: 'row',
        flex: 1, 
        alignItems: 'center'
    },
    textInputStyle: {
        flex: 1,paddingHorizontal: 4
    }
});

export default styles;