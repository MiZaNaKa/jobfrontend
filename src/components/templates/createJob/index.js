import React, { useState, useRef } from 'react';
import {View, Text, ScrollView} from 'react-native';


import InputBox from '../../atoms/Input/Input'
import { styles } from '../../../assets/css/common'
import MsIcon24 from '../../atoms/icon/MsIcon24';
import assetsManager from '../../../assets/AssetsManager';
import SimpleReactValidator from 'simple-react-validator';
import Button from '../../atoms/Buttons/Button';
import { useNavigation } from '@react-navigation/native';
import signUpAPI from '../../../services/signUpAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PickerBox from '../../atoms/Picker';

import {jobType,jobTime,jobCategory} from '../../../constants/job'
import AppBar from '../../organisms/AppBar/AppBar';

function createJobTemplate(props) {
    const simpleValidator = useRef(new SimpleReactValidator());
    const [text, setText] = React.useState("test")
    const [selection, setSelection] = React.useState({ start: 0, end: 0 })
    const [, forceUpdate] = useState();
    const navigation = useNavigation();
    const [focus, setFocus] = React.useState(false)
    const [error, setError] = useState("");
    const [priceError, setPriceError] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [data, setData] = useState({
        job_title: "",
        location: "",
        minimum: "",
        maximum: "",
        salary_date: "per_hour",
        job_type: "full_time",
        category: 1,
        description: "",
        userID: "",
        userName:""
    });

    const titleOnChange = value => {
        setData({ ...data, job_title: value });
    };



    const locationOnChange = value => {
        setData({ ...data, location: value });
    };

    const descriptionOnChange = value => {
        setData({ ...data, description: value });
    };

    const minimumOnChange = value => {
        setData({ ...data, minimum: value });
    };

    const maximumOnChange = value => {
        setData({ ...data, maximum: value });
    };

    const pickerChange = (value, type) => {
        if (type === "salaryDate") {
            setData({ ...data, salary_date: value });
        }
        else if (type === "jobType") {
            setData({ ...data, job_type: value });
        }
        else if (type === 'category') {
            setData({ ...data, category: value });
        }

    };

    const create = async () => {
        const obj = data;

        var value =await AsyncStorage.getItem('loginUser')
        var asyValue=JSON.parse(value)
       
        obj.userID=asyValue._id
        obj.userName=asyValue.name
       

        if (parseInt(obj.minimum) > parseInt(obj.maximum)) {
            setPriceError("Minimum price cannot be greater than maximum price")
        }
        else {
            setPriceError("")
            const formValid = simpleValidator.current.allValid()

            if (!formValid) {
                simpleValidator.current.showMessages()
                forceUpdate(1)
            }
            else {
                var res = await signUpAPI.createdJob(obj)
                if(res.data.status==1){
                    navigation.navigate('Job')
                }
                else{
                    setErrorMessage(res.data.message)
                }
            }
        }
    };

    return (
        <View style={styles.container}>
            <AppBar
                title="Create Job"
                backIconName={assetsManager.backicon}
                onPressBack={() => { navigation.goBack() }}
                isImage={false}
                text=""
            />
            <ScrollView>                
                <View
                    style={[styles.marginB10]}>

                    <View style={styles.paddingAll}>
                        <View style={[styles.row, styles.marginB10]}>
                            <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                <View>
                                    <MsIcon24 iconName={assetsManager.userIcon} />
                                </View>
                            </View>

                            <View style={styles.flexEight}>
                                <InputBox
                                    placholder="Title"
                                    borderColor={'#cfcfcf'}
                                    borderRadius={17}
                                    paddingTB={6}
                                    paddingR={15}
                                    paddingL={15}
                                    maxLength={50}
                                    number={false}
                                    secureTextEntry={false}
                                    action={titleOnChange}
                                    value={data.job_title}
                                    placholderColor={'#808080'}
                                    area={false}
                                />
                            </View>
                        </View>

                        {simpleValidator.current.message('job_title', data.job_title, 'required') ?
                            <View style={[styles.row, styles.marginB10]}>
                                <View style={[styles.flexOne, { justifyContent: 'center' }]}>

                                </View>

                                <View style={styles.flexEight}>
                                    <Text style={[styles.txt12, styles.txtRed]}>{simpleValidator.current.message('job_title', data.job_title, 'required')}</Text>
                                </View>
                            </View>
                            :
                            null
                        }



                        <View style={[styles.row, styles.marginB10]}>
                            <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                <View>
                                    <MsIcon24 iconName={assetsManager.locationIcon} />
                                </View>
                            </View>

                            <View style={styles.flexEight}>
                                <InputBox
                                    placholder="Location"
                                    borderColor={'#cfcfcf'}
                                    borderRadius={17}
                                    paddingTB={6}
                                    paddingR={15}
                                    paddingL={15}
                                    maxLength={150}
                                    number={false}
                                    secureTextEntry={false}
                                    action={locationOnChange}
                                    value={data.location}
                                    numberOfLines={3}
                                    placholderColor={'#808080'}
                                    area={true}
                                    multiline={true}
                                />
                            </View>
                        </View>

                        {simpleValidator.current.message('location', data.location, 'required') ?
                            <View style={[styles.row, styles.marginB10]}>
                                <View style={[styles.flexOne, { justifyContent: 'center' }]}>

                                </View>

                                <View style={styles.flexEight}>
                                    <Text style={[styles.txt12, styles.txtRed]}>{simpleValidator.current.message('location', data.location, 'required')}</Text>
                                </View>
                            </View>
                            :
                            null
                        }

                        <View style={[styles.row, styles.marginB10]}>
                            <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                <View>
                                    <MsIcon24 iconName={assetsManager.money} />
                                </View>
                            </View>

                            <View style={[styles.flexEight]}>
                                <View style={styles.row}>
                                    <View style={[styles.flexOne, styles.marginR10]}>
                                        <InputBox
                                            placholder="mini"
                                            borderColor={'#cfcfcf'}
                                            borderRadius={17}
                                            paddingTB={6}
                                            paddingR={15}
                                            paddingL={15}
                                            maxLength={7}
                                            number={true}
                                            secureTextEntry={false}
                                            action={minimumOnChange}
                                            value={data.minimum}
                                            numberOfLines={1}
                                            placholderColor={'#808080'}
                                            area={false}
                                        />
                                    </View>

                                    <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                        <InputBox
                                            placholder="max"
                                            borderColor={'#cfcfcf'}
                                            borderRadius={17}
                                            paddingTB={6}
                                            paddingR={15}
                                            paddingL={15}
                                            maxLength={7}
                                            number={true}
                                            secureTextEntry={false}
                                            action={maximumOnChange}
                                            value={data.maximum}
                                            numberOfLines={1}
                                            placholderColor={'#808080'}
                                            area={false}
                                        />
                                    </View>
                                </View>

                            </View>
                        </View>

                        {simpleValidator.current.message('minimum', data.minimum, 'required|numeric') || simpleValidator.current.message('maximum', data.maximum, 'required|numeric') || priceError ?
                            <View style={[styles.row, styles.marginB10]}>
                                <View style={[styles.flexOne, { justifyContent: 'center' }]}>

                                </View>

                                <View style={[styles.flexEight]}>
                                    <View style={styles.row}>
                                        <View>
                                            <Text style={[styles.txt12, styles.txtRed]}>{priceError}</Text>
                                        </View>
                                        <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                            {simpleValidator.current.message('minimum', data.minimum, 'required|numeric') ?
                                                <View style={[styles.row, styles.marginB10]}>
                                                    <View style={[styles.flexOne, { justifyContent: 'center' }]}>

                                                    </View>

                                                    <View style={styles.flexEight}>
                                                        <Text style={[styles.txt12, styles.txtRed]}>{simpleValidator.current.message('minimum', data.minimum, 'required|numeric')}</Text>
                                                    </View>
                                                </View>
                                                :
                                                null
                                            }
                                        </View>

                                        <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                            {simpleValidator.current.message('maximum', data.maximum, 'required|numeric') ?
                                                <View style={[styles.row, styles.marginB10]}>
                                                    <View style={[styles.flexOne, { justifyContent: 'center' }]}>

                                                    </View>

                                                    <View style={styles.flexEight}>
                                                        <Text style={[styles.txt12, styles.txtRed]}>{simpleValidator.current.message('maximum', data.maximum, 'required|numeric')}</Text>
                                                    </View>
                                                </View>
                                                :
                                                null
                                            }
                                        </View>
                                    </View>

                                </View>
                            </View>
                            :
                            null
                        }


                        <View style={[styles.row, styles.marginB10]}>
                            <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                <View>
                                    <MsIcon24 iconName={assetsManager.calendar} />
                                </View>
                            </View>

                            <View style={[styles.flexEight, styles.borderWidth1, styles.borderColorG, styles.borderRadius10, styles.pickerControl]}>
                                <PickerBox action={(value) => pickerChange(value, "jobType")} selectedValue={data.job_type} color={"#000"} fontSize={13} data={jobType} />
                            </View>
                        </View>

                        <View style={[styles.row, styles.marginB10]}>
                            <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                <View>
                                    <MsIcon24 iconName={assetsManager.workIcon} />
                                </View>
                            </View>

                            <View style={[styles.flexEight, styles.borderWidth1, styles.borderColorG, styles.borderRadius10, styles.pickerControl]}>
                                <PickerBox action={(value) => pickerChange(value, "salaryDate")} selectedValue={data.salary_date} value={"jsdfj"} color={"#000"} fontSize={13} data={jobTime} />
                            </View>
                        </View>

                        <View style={[styles.row, styles.marginB10]}>
                            <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                <View>
                                    <MsIcon24 iconName={assetsManager.category} />
                                </View>
                            </View>

                            <View style={[styles.flexEight, styles.borderWidth1, styles.borderColorG, styles.borderRadius10, styles.pickerControl]}>
                                <PickerBox action={(value) => pickerChange(value, "category")} selectedValue={data.category} color={"#000"} fontSize={13} data={jobCategory} />
                            </View>
                        </View>

                        <View style={[styles.row, styles.marginB10]}>
                            <View style={[styles.flexOne, { justifyContent: 'center' }]}>
                                <View>
                                    <MsIcon24 iconName={assetsManager.paragraph} />
                                </View>
                            </View>

                            <View style={[styles.flexEight]}>
                                <InputBox
                                    placholder="Description"
                                    borderColor={'#cfcfcf'}
                                    borderRadius={17}
                                    paddingTB={6}
                                    paddingR={15}
                                    paddingL={15}
                                    maxLength={250}
                                    number={false}
                                    secureTextEntry={false}
                                    action={descriptionOnChange}
                                    value={data.description}
                                    numberOfLines={4}
                                    placholderColor={'#808080'}
                                    area={true}
                                    multiline={true}
                                />
                            </View>
                        </View>

                        {simpleValidator.current.message('description', data.description, 'required') ?
                            <View style={[styles.row, styles.marginB10]}>
                                <View style={[styles.flexOne, { justifyContent: 'center' }]}>

                                </View>

                                <View style={styles.flexEight}>
                                    <Text style={[styles.txt12, styles.txtRed]}>{simpleValidator.current.message('description', data.description, 'required')}</Text>
                                </View>
                            </View>
                            :
                            null
                        }

                        {error ?
                            <View style={[styles.marB20, { backgroundColor: '#fcd7b7', padding: 20 }]}>
                                <Text style={[styles.txt14, styles.txtRed]}>{error}</Text>
                            </View>
                            :
                            null
                        }


                        <View style={styles.marginT24}>
                            <Button
                                action={create}
                                title="Save"
                                txt="center"
                                bgColor={'#f57f17'}
                                border="#f57f17"
                                txtColor="#fff"
                                borderRadius={10}
                                bold={true}
                                shadow={true}
                                fontSize={16}
                            />

                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

export default createJobTemplate;
