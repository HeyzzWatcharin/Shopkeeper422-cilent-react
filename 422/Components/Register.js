import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var gender_props = [
  { label: 'ชาย', value: 0 },
  { label: 'หญิง', value: 1 }
];

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.backBTN}
            source={require('../Image/back-left-arrow-botton.png')}
          ></Image>
        </View>
        <ScrollView>
          <View style={styles.LoginTitle}>
            <Image
              source={require('../Image/user-avatar-human-admin-login.png')}
            ></Image>
            <Text style={styles.Registxt}>สมัครสมาชิก</Text>
          </View>
          <View style={styles.FormBox}>
            <View style={styles.Fillhead}>
              <Text style={styles.emailTxt}>อีเมล</Text>
            </View>
            <View style={styles.inputZone}>
              <TextInput style={styles.TxtInput}></TextInput>
            </View>

            <View style={styles.Fillhead}>
              <Text style={styles.emailTxt}>ชื่อ-กสุล</Text>
            </View>
            <View style={styles.inputZone}>
              <TextInput style={styles.TxtInput}></TextInput>
            </View>

            <View style={styles.Fillhead}>
              <Text style={styles.emailTxt}>เพศ</Text>
            </View>
            <View style={styles.radioAln}>
              <RadioForm
                radio_props={gender_props}
                initial={0}
                labelHorizontal={true}
                labelStyle={{ fontSize: 14 }}
                onPress={value => {
                  ToastAndroid.show(value.toString(), ToastAndroid.SHORT);
                }}
              />
            </View>

            <View style={styles.passZone}>
              <Text style={styles.passTxt}>รหัสผ่าน</Text>
            </View>
            <View style={styles.inputZone}>
              <TextInput
                secureTextEntry={true}
                style={styles.TxtInput}
              ></TextInput>
            </View>

            <View style={styles.passZone}>
              <Text style={styles.passTxt}>ยินยันรหัสผ่าน</Text>
            </View>
            <View style={styles.inputZone}>
              <TextInput
                secureTextEntry={true}
                style={styles.TxtInput}
              ></TextInput>
            </View>

            <View style={styles.btnRegister}>
              <Button title="สมัครสมาชิก" color="#67DA16" />
            </View>
            <View style={styles.btnCancel}>
              <Button title="ยกเลิก" color="#CFCFCF" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  LoginTitle: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2'
  },
  Registxt: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#62973C',
    paddingHorizontal: 10
  },
  FormBox: {
    marginTop: 30,
    paddingHorizontal: 20,

    alignItems: 'center'
  },
  Fillhead: {
    marginTop: 15,
    alignSelf: 'flex-start'
  },
  emailTxt: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#294C74'
  },
  TxtInput: {
    marginTop: 15,
    backgroundColor: '#E0E7DB',
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: 250
  },
  inputZone: {
    width: '100%'
  },
  passZone: {
    alignSelf: 'flex-start'
  },
  passTxt: {
    marginTop: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#294C74'
  },
  btnRegister: {
    width: 'auto',
    justifyContent: 'center',
    marginTop: 45
  },

  backBTN: {
    width: 25,
    height: 25,
    marginTop: 20,
    marginLeft: 15,
    zIndex: 999,
    opacity: 0.6
  },
  btnCancel: {
    width: 'auto',
    justifyContent: 'center',
    marginTop: 20
  },
  radioAln: {
    marginTop: 15,
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
  }
});
