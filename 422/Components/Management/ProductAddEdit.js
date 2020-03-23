import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';

export default class ProductAddEdit extends React.Component {
  state = {
    text: ''
  };
  Adding = () => {
    alert('ok');
  }
  render() {
    return (
      <View style={styles.PageaddEditContain}>
        <ScrollView>
          <View>
            <Text style={styles.titleManage2}>PRODUCT ADDTING</Text>
          </View>
          <View stlye={styles.flexRow}>
            <Image style={styles.ImgProperty}></Image>
          </View>
          <View style={styles.UploadContain}>
            <Text style={styles.UnderLineUpload}>Upload image</Text>
          </View>
          <View>
            <View style={styles.RowContain}>
              <View>
                <Text>PRODUCT ID</Text>
              </View>
              <View style={styles.RowContainFlex}>
                <TextInput style={styles.TextInputFromDbsColor} placeholder='hello' />
              </View>
              <Image
                style={styles.ImgAlignRight}
                source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
              ></Image>
            </View>
            <View style={styles.RowContain}>
              <View>
                <Text>PRODUCT CODE</Text>
              </View>
              <View style={styles.RowContainFlex}>
                <TextInput style={styles.TextInputFromDbsColor} value='JAV-6849' />
              </View>
              <Image
                style={styles.ImgAlignRight}
                source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
              ></Image>
            </View>
            <View style={styles.RowContain}>
              <View>
                <Text>PRODUCT NAME</Text>
              </View>
              <View style={styles.RowContainFlex}>
                <TextInput style={styles.TextInputFromDbsColor} value='Water' />
              </View>
              <Image
                style={styles.ImgAlignRight}
                source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
              ></Image>
            </View>
            <View style={styles.RowContain}>
              <View>
                <Text>CATEGORY</Text>
              </View>
              <View style={styles.RowContainFlex}>
                <TextInput style={styles.TextInputFromDbsColor} value='drink' />
              </View>
              <Image
                style={styles.ImgAlignRight}
                source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
              ></Image>
            </View>
            <View style={styles.RowContain}>
              <View>
                <Text>PRICES</Text>
              </View>
              <View style={styles.RowContainFlex}>
                <TextInput style={styles.TextInputFromDbsColor} value='10' />
              </View>
              <Image
                style={styles.ImgAlignRight}
                source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
              ></Image>
            </View>
            <View style={styles.RowContain}>
              <View>
                <Text>QUANTITIES</Text>
              </View>
              <View style={styles.RowContainFlex}>
                <TextInput style={styles.TextInputFromDbsColor} placeholder='24' />
              </View>
              <Image
                style={styles.ImgAlignRight}
                source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
              ></Image>
            </View>
            <View style={styles.descStyle}>
              <View>
                <Text>DESCRIPTION</Text>
              </View>
              <View style={styles.RowContainFlex}>
                <TextInput style={styles.TextInputFromDbsColor} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum augue nec libero aliquet tristique.' />
              </View>
              <Image
                style={styles.ImgAlignRight}
                source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
              ></Image>
            </View>

            <View style={styles.BtnTab}>
              <TouchableOpacity style={styles.SUbmitBtnContain} >
                <Button onPress={this.Adding} title='SUBMIT' />
              </TouchableOpacity>
              <View style={styles.CancelBtnContain}>
                <Button title='CANCEL' />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PageaddEditContain: {
    flex:1,
  },
  flexRow: {
    flexDirection: 'row'
  },
  titleManage2: {
    color: '#359100',
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginVertical: 20
  },
  ImgProperty: {
    height: 250,
    width: 250,
    backgroundColor: '#F6F6F6',
    margin: 10,
    alignSelf: 'center'
  },
  UploadContain: {
    alignItems: 'center',
    marginVertical: 12
  },
  UnderLineUpload: {
    textDecorationLine: 'underline'
  },
  RowContain: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  descStyle: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#E9E9E9'
  },
  TextFromDbsColor: {
    color: '#717983'
  },
  RowContainFlex: {
    marginLeft: 20,
    flex: 1
  },
  BtnTab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10
  },
  SUbmitBtnContain: {
    backgroundColor: '#67DA16',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 20
  },
  SubmitBtn: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18
  },
  CancelBtnContain: {
    backgroundColor: '#CFCFCF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 20
  },
  CancelBtn: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16
  },
  ImgAlignRight: {
    marginLeft: 'auto'
  },
  BackBtn: {
    width: 26,
    height: 26,
    marginTop: 35,
    marginLeft: 15
  },
  TextInputFromDbsColor: {
    color: '#717983',
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
    paddingHorizontal:5
  }
});
