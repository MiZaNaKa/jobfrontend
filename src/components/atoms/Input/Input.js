import {
  TextInput,
  View
} from 'react-native';
import MsIcon24 from '../icon/MsIcon24';
import {styles} from '../../../assets/css/common';
const InputBox = props => (
  <View>
    {props.shadow ?
      <View style={[styles.row,styles.searchShadow,styles.borderRadius10,styles.backgroundWhite,{borderRadius:props.borderRadius,width:'100%'}]}>
        {props.icon ?
          <View style={{justifyContent:'center', paddingLeft:15,paddingRight:15,backgroundColor:'#fff',borderTopLeftRadius:props.borderRadius,borderBottomLeftRadius:props.borderRadius}}>
            <MsIcon24  iconName={props.icon}/>
          </View>
          :
          null
        }
        
        <TextInput
          value={props.value}
          onChangeText={props.action}
          placeholder={props.placholder}
          style={[styles.searchBar,{borderColor:props.borderColor,paddingTop:props.paddingTB,paddingBottom:props.paddingTB,paddingLeft:props.paddingL,paddingRight:props.paddingR,marginLeft:props.icon ? -7 :0,width:props.icon ? props.inputWidth:'100%',borderRadius:props.borderRadius,textAlignVertical:props.area? 'top':'auto'}]}
          secureTextEntry={props.secureTextEntry}
          keyboardType = {props.number ? 'numeric' :'string'}
          numberOfLines = {props.numberOfLines}
          onTouchStart={props.onTouchStart}
          maxLength={props.maxLength}
          onSubmitEditing={props.submitAction}
          placeholderTextColor={props.placholderColor ? props.placholderColor :'#000'}
          editable={props.editable}
          multiline={props.multiline}
          scrollEnabled={true}
        />
    
      </View>
      :
      <View style={[styles.row,styles.borderRadius10,styles.backgroundWhite]}>
        {props.icon ?
          <View style={{paddingTop:12,paddingLeft:5,paddingRight:5,backgroundColor:'#fff',borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
            <MsIcon24  iconName={props.icon}/>
          </View>
          :
          null
        }
        
        <TextInput
          value={props.value}
          onChangeText={props.action}
          placeholder={props.placholder}
          style={[styles.searchBar,{textAlignVertical:props.area? 'top':'auto',borderColor:props.borderColor,borderRadius:props.borderRadius,paddingTop:props.paddingTB,paddingBottom:props.paddingTB,paddingLeft:props.paddingL,paddingRight:props.paddingR,marginLeft:props.icon ? -7 :0,width:props.icon ? props.inputWidth:'100%'}]}
          secureTextEntry={props.secureTextEntry}
          keyboardType = {props.number ? 'numeric' :'string'}
          numberOfLines = {props.numberOfLines}
          onTouchStart={props.onTouchStart}
          maxLength={props.maxLength}
          onSubmitEditing={props.submitAction}
          placeholderTextColor={props.placholderColor ? props.placholderColor :'#000'}
          editable={props.editable}
          multiline={props.multiline}
          scrollEnabled={true}
        />

      </View>
    }
  </View>
  
 
);

export default InputBox;