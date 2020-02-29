# Shopkeeper422-cilent-react

**ติดตั้ง Expo

1.ติดตั้ง Node.js


2.เปิด command prompt



3.ติดตั้ง Expo พิมคำสั่งตามนี้
  npm install expo-cli --global
  
  
4.สร้างไฟล์ project สำหรับ Expo
  expo init "ชื่อไฟล์"
  เวลาสร้าง pro่ject มันจะถามว่าเอา รูปแบบ เป็นแบบไหนให้ใช้รูปแบบ "Blank" //ให้ใช้ Blank แบบธรรมดาที่ไม่มี script
  
  
5.เข้าไปในไฟล์ Project
  cd "ชื่อไฟล์"
  
  
6.เวลาต้องการจะ Run ขึ้น Simulator ให้ใช้คำสั่ง
  expo start หรือ npm start

เมือทำการ Run Project แล้วจะมี QR code ขึ้นมาใน Command prompt และ บนเว็ป Browser
ให้ใช่้ตัวแสดง Simulator สแกน QR code ในที่นี้จะใช้ตัวไหนก็ได้ที่สามารถสแกนได้หรือจะใช้ Expo Client บนมือถือเลยก็ได้(สามารถ Download ได้ทาง store ทั่วไป ~~~ !? )


ศึกษาเพิ่มเติม https://expo.io/learn //ที่เขียนมาทั้งหมดเหมือนในเว็ปนั้นแหละ *-*


(------- อัพเดท 1/3/63 01.13 น. -------)

อัพ code ให้แล้วตัวฟังก์ชั่นต่างๆจะอยู่ใน App.js (side_memu,Bottom_tab) ส่วนหน้าแรก(หน้าMain) จะอยู่ใน Components/HomeScreen.js


ถ้าใคร Run ไม่ได้ให้ติดตั้งตัวเสริมตามนี้ (ไม่มีอันไหนก็ลงอันนั้นแหละ)

    "@react-native-community/masked-view": "^0.1.5",
    "@react-navigation/bottom-tabs": "^5.1.0",
    "@react-navigation/core": "^5.2.0",
    "@react-navigation/drawer": "^5.1.0",
    "@react-navigation/native": "^5.0.8",
    "@react-navigation/stack": "^5.1.0",
    "expo": "~36.0.0",
    "react": "~16.9.0",
    "react-dom": "~16.9.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-36.0.0.tar.gz",
    "react-native-elements": "^1.2.7",
    "react-native-gesture-handler": "^1.5.6",
    "react-native-reanimated": "^1.4.0",
    "react-native-safe-area-context": "^0.6.0",
    "react-native-screens": "^2.0.0-alpha.12",
    "react-native-web": "~0.11.7"

วิธีติดตั้ง "npm install _______ตามชื่อมันเลย_______"


ตัวอย่าง " npm install @react-navigation/native "
