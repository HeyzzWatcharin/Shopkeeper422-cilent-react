import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

export default class ProductAddEdit extends React.Component {
  render() {
    return (
      <View style={styles.PageaddEditContain}>
        <View>
          <Image
            style={styles.BackBtn}
            source={require('../../Image/back-left-arrow-botton.png')}
          ></Image>

          <Text style={styles.titleManage2}>PRODUCT EDITING</Text>
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
              <Text>PRODUCT NAME</Text>
            </View>
            <View style={styles.RowContainFlex}>
              <Text style={styles.TextFromDbsColor}>sprice</Text>
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
              <Text style={styles.TextFromDbsColor}>drinks</Text>
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
              <Text style={styles.TextFromDbsColor}>xxx</Text>
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
              <Text style={styles.TextFromDbsColor}>22</Text>
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
              <Text style={styles.TextFromDbsColor}>
                There are many variations of passages of Lorem
              </Text>
            </View>
            <Image
              style={styles.ImgAlignRight}
              source={require('../../Image/ic_keyboard_arrow_right_24px.png')}
            ></Image>
          </View>

          <View style={styles.BtnTab}>
            <View style={styles.SUbmitBtnContain}>
              <Text style={styles.SubmitBtn}>Submit</Text>
            </View>
            <View style={styles.CancelBtnContain}>
              <Text style={styles.CancelBtn}>Cancel</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PageaddEditContain: {
    paddingVertical: 15,
    marginTop: 20
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
    marginBottom: 20
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
    justifyContent: 'center',
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
  }
});
