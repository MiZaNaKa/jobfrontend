import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
    headercontainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageHeader: {
        width: 230,
        height: 172,
        marginTop: 40
    },
    text: {
        position: 'absolute',
        alignItems: 'center',
        top: 210,
    },
    title: {
        fontSize: 29,
        fontFamily: 'Poppins-Bold',
        color: '#333333',
        paddingBottom: 0,
        paddingTop: 0
    },
    subtitle: {
        paddingTop: 0,
        textAlign: 'center',
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: '600',
        fontFamily: 'Poppins-Regular',
        color: '#333333',
        lineHeight: 17
    },
    inputcontainer: {
        flex: 1,
        marginTop: 180,
        flexDirection: 'column',
        marginHorizontal: 15
    },
    emailLabel: {
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    },
    checkboxrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkbox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rememberMe: {
        color: '#333', 
        fontFamily: 'Poppins-Regular',
    },
    forgot: {
        fontFamily: 'Poppins-Regular',
        color: '#767676',
        fontSize: 15
    },
    btncontainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 20
    }
});

export default style;