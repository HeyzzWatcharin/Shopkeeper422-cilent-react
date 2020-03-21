import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TopSalesZone extends React.Component {
  render() {
    return (
      <View style={{ paddingVertical: 30 }}>
        <View style={styles.topSalesContainer}>
          <Text style={styles.titleManage}>Top sales</Text>
          <View style={styles.LinerowText}>
            <Text style={styles.TextShow}>Show</Text>
            <Text style={styles.TextShowNumber}>4</Text>
            <Text style={styles.TextShowItem}>Items</Text>
            <View style={styles.IconContain}>
              <Image
                style={styles.MinusIcon}
                source={require('../../Image/ic_remove_24px.png')}
              ></Image>
              <Image
                style={styles.PlusIcon}
                source={require('../../Image/ic_add_24px.png')}
              ></Image>
            </View>
          </View>

          <View style={styles.ButtonContain}>
            <Text style={styles.CancelBtn}>Cancel</Text>
            <Text style={styles.SaveBtn}>Save</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleManage: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingLeft: 20
  },
  topSalesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    marginRight: 20
  },
  LinerowText: {
    flexDirection: 'row',
    marginVertical: 20
  },
  TextShow: {
    fontSize: 18,
    paddingLeft: 20,
    alignSelf: 'center'
  },
  TextShowNumber: {
    fontSize: 18,
    color: '#359100',
    paddingLeft: 20
  },
  TextShowItem: {
    fontSize: 18,
    paddingLeft: 20
  },
  IconContain: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  MinusIcon: {
    width: 32,
    height: 32,
    marginRight: 5
  },
  PlusIcon: {
    width: 32,
    height: 32,
    marginLeft: 5
  },
  ButtonContain: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginBottom: 30
  },
  CancelBtn: {
    backgroundColor: '#CFCFCF',
    fontWeight: 'bold',
    color: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 5,
    textTransform: 'uppercase',
    fontSize: 18,
    marginRight: 10
  },
  SaveBtn: {
    backgroundColor: '#FF0000',
    fontWeight: 'bold',
    color: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 5,
    textTransform: 'uppercase',
    fontSize: 18
  }
});
