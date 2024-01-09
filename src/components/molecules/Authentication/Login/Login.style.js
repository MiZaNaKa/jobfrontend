import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
    headercontainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    imageHeader: {
        width: 296,
        height: 220,
        marginTop: 50
    },
    text: {
        position: 'absolute',
        alignItems: 'center',
        top: 250
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
        width: 250,
        fontSize: 15,
        fontWeight: '600',
        fontFamily: 'Poppins-Regular',
        color: '#333333',
        lineHeight: 17
    },
    inputcontainer: {
        flex: 1,
        marginTop: 150,
        flexDirection: 'column',
        marginHorizontal: 15
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
        marginTop: 20
    },
    footercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 25
    },
    socialBtn: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    socialIconShape: {
        backgroundColor: '#CFCFCF',
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
     },
    footertext: {
        fontFamily: 'Poppins-Regular',
        color: '#767676',
        fontSize: 15
    },
    signup: {
        color: '#333',
        fontFamily: 'Poppins-Regular',
        fontWeight: 'bold',
        fontSize: 15,
        top:-2
    }
});

export default style;