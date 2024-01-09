import { StyleSheet } from 'react-native';
const gridStyle = StyleSheet.create({
    gridBox:{
        flexDirection: 'row',       
        flexWrap:'wrap',
    },
    gridContact:{
        borderWidth:1,
        borderColor:'#F69B32',
        padding:10
    },
    gridInner:{
        width:130,
        marginBottom:15,
        padding:10,
        marginRight:15
    }
});

export default gridStyle;