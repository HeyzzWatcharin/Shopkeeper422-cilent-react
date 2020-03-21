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

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  renderItem(item) {
    return (
      <View>
        <View>
          <Text style={styles.userComment}>Mr.zero</Text>
          <Text style={styles.dateComment}>20/12/03 Fri 2 P.M.</Text>
        </View>
        <View style={styles.commentDtl}>
          <Text>This is awesome !</Text>
        </View>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topTab}></View>
        <ScrollView>
          <View style={styles.productZonethm}>
            <Image
              style={styles.backBTN}
              source={require('../Image/back-left-arrow-botton.png')}
            ></Image>
            <Image
              style={styles.thmbProduct}
              source={require('../assets/products/sprite_thumb.jpg')}
            ></Image>
          </View>
          <View style={styles.pDetailZone}>
            <View style={styles.pDetailHead}>
              <Text style={styles.productNamesty}>Sprite</Text>
              <Text style={styles.productPrc}>฿ 18</Text>
              <View style={styles.qtyZone}>
                <View style={styles.gridRowQty}>
                  <Text style={styles.stockDesText}>5</Text>
                  <Text style={styles.stockDesText2}>สินค้าคงเหลือ</Text>
                </View>
                <View style={styles.stockRate}>
                  <Text style={styles.stockDesText}>3.5</Text>
                  <Text style={styles.stockDesText2}>คะแนน</Text>
                  <View style={styles.RateIconBTN}>
                    <Image
                      style={styles.LikeBTN}
                      source={require('../Image/ic_rateUp.png')}
                    ></Image>
                    <Image
                      style={styles.dislikeBTN}
                      source={require('../Image/ic_rateDown.png')}
                    ></Image>
                  </View>
                </View>
                <View style={styles.commentBox}>
                  <Text style={styles.stockDesText}>3</Text>
                  <Text style={styles.stockDesText2}>ความคิดเห็น</Text>
                </View>
              </View>
              <View>
                <Text>เกี่ยวกับสินค้า</Text>
              </View>
              <View>
                <Text style={styles.desc}>
                  เครื่องดื่มน้ำอัดลมเลม่อน-มะนาว
                  เครื่องดื่มที่จะทำให้คุณสดชื่น, สนุก,
                  และซ่าไปกับกลิ่นมะนาวคุณค่าทางโภชนาการพลังงาน 120
                  กิโลแคลอรี่ต่อ 200 มล.ไม่ใช่อาหารพลังงานต่ำ
                </Text>
              </View>
            </View>

            <View style={styles.addBasketRow}>
              <View style={styles.plusDelAlign}>
                <Text style={styles.addBastketCountBox}>
                  <Text>X1 item </Text>
                  <Image
                    style={styles.btnSIze}
                    source={require('../Image/ic_add_24px.png')}
                  ></Image>
                  <Text> </Text>
                  <Image
                    style={styles.btnSIze}
                    source={require('../Image/ic_remove_24px.png')}
                  ></Image>
                </Text>
              </View>
              <View>
                <Text style={styles.addBastketBox}>ยืนยันการขาย</Text>
              </View>
            </View>

            <View style={styles.CommentHeight}>
              <Text style={styles.commentTitle}>แสดงความคิดเห็น</Text>
              <View>
                <FlatList
                  horizontal={false}
                  data={[1, 2, 3, 4, 5]}
                  renderItem={({ item }) => this.renderItem(item)}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    flex: 1,
    justifyContent: 'space-between'
  },
  topTab: {
    height: 30,
    backgroundColor: '#3B651E'
  },
  productZonethm: {
    backgroundColor: '#F6F6F6',
    width: 'auto',
    height: 300
  },
  pDetailZone: {
    backgroundColor: '#FFF',
    padding: 30
  },
  qtyZone: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 50
  },
  thmbProduct: {
    width: '100%',
    height: '100%',
    marginTop: 'auto'
  },
  backBTN: {
    width: 25,
    height: 25,
    marginTop: 20,
    marginLeft: 15,
    zIndex: 999,
    opacity: 0.6
  },
  productNamesty: {
    fontWeight: 'bold',
    fontSize: 20
  },
  productPrc: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#51C400'
  },
  gridRowQty: {
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRightColor: '#F6F6F6',
    borderRightWidth: 1
  },
  stockCount: {
    color: '#717983',
    padding: 5
  },
  sotckCountDesc: {
    color: '#717983',
    padding: 5
  },
  stockRate: {
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRightColor: '#F6F6F6',
    borderRightWidth: 1
  },
  stockDesText: {
    color: '#275E00',
    padding: 5
  },
  stockDesText2: {
    color: '#717983',
    padding: 5
  },
  commentBox: {
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  RateIconBTN: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 120
  },
  LikeBTN: {
    marginTop: 10,
    marginRight: 10,
    width: 26,
    height: 30
  },
  dislikeBTN: {
    marginTop: 10,
    marginLeft: 10,
    width: 26,
    height: 30
  },
  commentTitle: {
    borderBottomColor: '#F4F5F6',
    borderBottomWidth: 1,
    paddingBottom: 14,
    width: 120
  },
  desc: {
    color: '#717983',
    marginTop: 16
  },
  addBasketRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 50
  },
  addBastketBox: {
    backgroundColor: '#3B651E',
    fontSize: 16,
    color: '#FFF',
    padding: 13,
    alignItems: 'center'
  },
  addBastketCountBox: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    alignItems: 'center',
    fontSize: 16,
    color: '#51C400'
  },
  btnSIze: {
    width: 35,
    height: 35
  },
  commentDtl: {
    backgroundColor: '#F1F1F1',
    borderRadius: 15,
    padding: 14,
    marginTop: 14
  },
  userComment: { color: '#317600', marginTop: 18 },
  dateComment: { color: '#BBBBBB' },
  plusDelAlign: {
    marginTop: -15
  }
});