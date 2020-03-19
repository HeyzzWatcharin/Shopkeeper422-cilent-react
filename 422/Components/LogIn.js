import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LogIn extends React.Component {
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
            <Text style={styles.Logintxt}>เข้าสู่ระบบ</Text>
          </View>
          <View style={styles.FormBox}>
            <View style={styles.emailZone}>
              <Text style={styles.emailTxt}>Email</Text>
            </View>
            <View style={styles.inputZone}>
              <TextInput style={styles.TxtInput}></TextInput>
            </View>
            <View style={styles.passZone}>
              <Text style={styles.passTxt}>Passoword</Text>
            </View>
            <View style={styles.inputZone}>
              <TextInput
                secureTextEntry={true}
                style={styles.TxtInput}
              ></TextInput>
            </View>
            <View style={styles.btnLOGIN}>
              <Button title="LOGIN" color="#67DA16" />
            </View>

            <Text style={styles.alink}>ท่านยังไม่ได้เป็นสมาชิก ?</Text>
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
  Logintxt: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#62973C',
    paddingHorizontal: 10
  },
  FormBox: {
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emailZone: {
    alignItems: 'center'
  },
  emailTxt: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
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
    marginHorizontal: 30
  },
  passZone: {
    alignItems: 'center'
  },
  passTxt: {
    marginTop: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#294C74'
  },
  btnLOGIN: {
    width: 100,
    justifyContent: 'center',
    marginTop: 45
  },
  alink: {
    fontSize: 12,
    marginTop: 30,
    textTransform: 'uppercase',
    color: '#294C74',
    textDecorationLine: 'underline'
  },
  backBTN: {
    width: 25,
    height: 25,
    marginTop: 20,
    marginLeft: 15,
    zIndex: 999,
    opacity: 0.6
  }
});
