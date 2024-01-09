import {
    TextInput,
    Text,
    View
  } from 'react-native';
  import {Picker} from '@react-native-picker/picker';
  import {styles} from '../../../assets/css/common';

  function PickerBox(props) {
   
    return (
        <View>
            <Picker
                selectedValue={props.selectedValue}
                onValueChange={props.action}
                
            >
                {props.data && props.data.map((value,index)=>{
                    return <Picker.Item style={{fontFamily:'Poppins-Medium', fontSize:props.fontSize,color:props.color}} key={index} color={props.color} label={value.name} value={value.id} />
                })}
            </Picker>

            {/* <View
                style={{
                width: '70%',
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'black',
                height: 30,
                padding: 6,
                overflow: 'hidden',
                justifyContent: 'center',
                display: 'flex',
                }}
            >
                <Picker
                
                onValueChange={(itemValue, itemIndex) => {}}>
                <Picker.Item label="Java" value="java" style={{fontSize: 13}} />
                <Picker.Item label="JavaScript" value="js" style={{fontSize: 13}} />
                </Picker>
            </View> */}
           
        </View>
    );
  }
  
  
  export default PickerBox;


//   const PickerBox = props => (
//     <View>
//         <Picker
//             // selectedValue={choosenLabel}
//             // onValueChange={(itemValue, itemIndex) => {
//             // setChoosenLabel(itemValue)
//             // setChoosenIndex(itemIndex)
//             // }}
//         >
//             {props.data.map((value,index)=>{
//                 <Picker.Item key={index}  label={value.name} value={value.id} />
//             })}
//         </Picker>
//         {props.map((value) =>
//             <Text>{value.name}</Text>
//         )}
        
//     </View>
    
   
//   );
  
//   export default PickerBox;