// import React, {useEffect, useState} from 'react';
// import {
//   ScrollView,
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';



// import { FlatGrid } from 'react-native-super-grid';


// function Grid(props) {
    
//   return (
//     <View style={inlineStyle.jobBox2}>
        
//         <FlatGrid
//           itemDimension={100}
//           data={[1,2,3,4,5,6]}
//           renderItem={({ item }) => (
//           <View style={{width:30,borderWidth:1}}>
//             <Text>{item}</Text>
//           </View>
//           )}
//         />
//     </View>
//   );
// }



// const inlineStyle = StyleSheet.create({
//   jobBox1: {
//     backgroundColor: '#F6ECEB',
//     paddingTop: 50,
//     // paddingLeft:20,
//     // paddingRight:20,
//     paddingBottom: 30,
//   },
//   titleTxt: {
//     fontSize: 20,
//     fontWeight: '500',
//   },
//   marginBottom: {
//     marginBottom: 30,
//   },
//   searchButton: {
//     padding: 10,
//     marginLeft: 30,
//     backgroundColor: '#F69B32',
//     borderRadius: 9,
//   },
//   jobBox2: {
//     paddingTop: 15,
//     paddingBottom:15
//   },
//   nearbyJob: {
//     padding: 10,
//   },
//   nearbyJobBgImage: {
//     width: 315,
//     height: 184,
//   },
//   nearbyJobCompanyNameBox: {
//     padding: 25,

//   },
//   nearbyJobCompanyPositionBox: {
//     paddingLeft: 25,
//     paddingBottom: 20,
//   },
//   nearbyJobCompanyNameText: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: '600',
//   },
//   nearbyJobCompanyPositionNameText: {
//     fontSize: 18,
//     color: '#fff',
//   },
//   nearbyJobCompanyPositionTypeText: {
//     fontSize: 16,
//     color: '#fff',
//     // alignSelf: 'flex-start',
//   },
//   nearbyJobCompanyPositionTypeBox: {
//     paddingLeft: 25,
//     paddingBottom: 20,
//     flexDirection:'row',
//   },
//   nearbyJobCompanyCountryText: {
//     fontSize: 11,
//     alignSelf: 'flex-end',
//     color: '#fff',
//     paddingRight: 25,
//     marginTop: 5,
//   },
//   column1: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   column2: {
//     flex: 2,
//     flexDirection: 'column',
//   },
//   jobImage: {
//     width: 85,
//     height: 85,
//   },
//   applyButton:{
//     width:'100%',
//     marginTop:30,
//     paddingTop:15,
//     paddingBottom:15,
//     textAlign:'center',
//     backgroundColor:'orange',
//     borderRadius:15
//   },
//   applyButtonText:{
//     color:'#fff',
//     textAlign:'center'
//   }
// });

// export default Grid;
