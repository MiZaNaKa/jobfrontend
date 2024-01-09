import {
  TextInput,
  View
} from 'react-native';
import MsIcon24 from '../icon/MsIcon24';
// import {styles} from '../../../assets/css/common';
import styles from './TextInputBox.Styles';
const TextInputBox = props => (
  <View style={{margin: 2}}>
    {props.icon ? 
      <View style={{flexDirection: 'column'}}>
      <View style={[styles.textInputBorderStyle, props.customCardStyle]}>
        <View style={{justifyContent: 'flex-start', alignItems: 'center', marginTop: 10,width: 45}}>
          <MsIcon24  iconName={props.icon}/>
        </View>
        <TextInput
          editable = {props.editable}
          value={props.value}
          onChangeText={props.action}
          placeholder={props.placholder}
          secureTextEntry={props.secureTextEntry}
          keyboardType = {props.number ? 'numeric' :'string'}
          numberOfLines = {props.numberOfLines}
          multiline = {props.multiline}
          onTouchStart={props.onTouchStart}
          onSubmitEditing={props.onSubmitEditing}
          style={[{flex: 1,marginRight: 32, borderRadius: 8, textAlignVertical: 'top', height: props.area},props.textColor]}
          placeholderTextColor={props.placholderColor ? props.placholderColor :'#000'}/>
      </View>
      {props.makeValidation ?
        <View>
          {props.simpleValidator.current.message(props.fieldName, props.yourName, 'required') ?
            <Text style={[styles.txt12,styles.txtRed,{marginLeft: 14}]}>{props.simpleValidator.current.message(props.fieldName, props.yourName, 'required')}</Text>
            :
            null
          }
        </View> : null
      }
      </View> :
      <View style={[styles.textInputBorderStyle, props.customCardStyle]}>
        <View style={{width: 20}} />
        <TextInput
        editable = {props.editable}
        value={props.value}
        onChangeText={props.action}
        placeholder={props.placholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType = {props.number ? 'numeric' :'string'}
        numberOfLines = {props.numberOfLines}
        onTouchStart={props.onTouchStart}
        onSubmitEditing={props.submitAction}
        style={[{flex: 1,marginRight: 16},props.textColor]}
        placeholderTextColor={props.placholderColor ? props.placholderColor :'#000'}/>
      </View>
    }
  </View>

  // <View>
  //   {props.shadow ?
  //     <View style={[styles.row,styles.textInputShadow,styles.borderRadius10,styles.backgroundWhite,{borderRadius:props.borderRadius,width:'100%'}]}>
  //       {props.icon ?
  //         <View style={{justifyContent:'center',paddingLeft:15,paddingRight:15,backgroundColor:'#fff',borderTopLeftRadius:props.borderRadius,borderBottomLeftRadius:props.borderRadius}}>
  //           <MsIcon24  iconName={props.icon}/>
  //         </View>
  //         :
  //         null
  //       }
        
  //       <TextInput
  //         value={props.value}
  //         onChangeText={props.action}
  //         placeholder={props.placholder}
  //         // style={[styles.searchBar,{borderColor:props.borderColor,paddingTop:props.paddingTB,paddingBottom:props.paddingTB,paddingLeft:props.paddingL,paddingRight:props.paddingR,marginLeft:props.icon ? -7 :0,borderRadius:props.borderRadius}]}
  //         style={[styles.searchBar,{borderColor:props.borderColor,paddingTop:props.paddingTB,paddingBottom:props.paddingTB,paddingLeft:props.paddingL,paddingRight:props.paddingR,marginLeft:props.icon ? -7 :0,borderRadius:props.borderRadius}]}
  //         secureTextEntry={props.secureTextEntry}
  //         keyboardType = {props.number ? 'numeric' :'string'}
  //         numberOfLines = {props.numberOfLines}
  //         onTouchStart={props.onTouchStart}
  //         maxLength={props.maxLength}
  //         onSubmitEditing={props.submitAction}
  //         placeholderTextColor={props.placholderColor ? props.placholderColor :'#000'}
  //         editable={props.editable}
  //       />
    
  //     </View>
  //     :
  //     <View style={[styles.row,styles.borderRadius10,styles.backgroundWhite]}>
  //       {props.icon ?
  //         <View style={{paddingTop:12,paddingLeft:5,paddingRight:5,backgroundColor:'#fff',borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
  //           <MsIcon24  iconName={props.icon}/>
  //         </View>
  //         :
  //         null
  //       }
        
  //       <TextInput
  //         value={props.value}
  //         onChangeText={props.action}
  //         placeholder={props.placholder}
  //         style={[styles.searchBar,{borderColor:props.borderColor,borderRadius:props.borderRadius,paddingTop:props.paddingTB,paddingBottom:props.paddingTB,paddingLeft:props.paddingL,paddingRight:props.paddingR,marginLeft:props.icon ? -7 :0,width:props.icon ? props.inputWidth:'100%'}]}
  //         secureTextEntry={props.secureTextEntry}
  //         keyboardType = {props.number ? 'numeric' :'string'}
  //         numberOfLines = {props.numberOfLines}
  //         onTouchStart={props.onTouchStart}
  //         maxLength={props.maxLength}
  //         onSubmitEditing={props.submitAction}
  //         placeholderTextColor={props.placholderColor ? props.placholderColor :'#000'}
  //         editable={props.editable}
  //       />

  //     </View>
  //   }
  // </View>
  
 
);

export default TextInputBox;