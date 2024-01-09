import { StyleSheet } from 'react-native';
const gridStyle = StyleSheet.create({
    gridBox:{
        flexDirection: 'row',       
        flexWrap:'wrap',
    },
    gridContact:{
        borderWidth:1,
        borderColor:'#F69B32',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:13,
        paddingRight:13
    },
    gridInner:{
        // marginBottom:12,
        padding:5,
        marginRight:15
    }
});

export default gridStyle;