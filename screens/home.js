import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <ScrollView style={{}}>
      <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
        <Image style={{ height: 40, width: 40, borderRadius: 20, }} resizeMode='cover' source={require("../assets/profile.jpeg")} />


        <Image style={{ height: 30, width: 30, }} resizeMode='cover' source={require("../assets/magnifying-glass.png")} />
      </View>
      <Text style={styles.t1}>Welcome to your {"\n"}Career Center</Text>
      <Text style={{ color: "black", fontSize: 15, marginTop: 10, fontWeight: "500", paddingHorizontal: 20 }}>Your career journey starts now. Explore {"\n"}resources, events and make an appointment {"\n"}with a counselor.</Text>


      <Text style={{ color: "black", fontSize: 24, fontWeight: "800", marginTop: 20, paddingHorizontal: 20 }}>Quick Links</Text>







      <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 20, paddingHorizontal: 20 }}>
        <View style={{ backgroundColor: "#e8eef2", borderRadius: 10, justifyContent: 'center', alignItems: "center", height: 50, width: 50 }}>
          <Image style={{ height: 30, width: 30, }} resizeMode='cover' source={require("../assets/magnifying-glass.png")} />
        </View>

        <View style={{ marginLeft: 15, flex: 1, }}>
          <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>Career Finder</Text>
          <Text style={{ color: "#5e7783", fontSize: 14, fontWeight: "500" }}>Explore careers that fit you</Text>
        </View>

        <Image source={require("../assets/next.png")} style={{ height: 20, width: 30 }} resizeMode='cover' />
      </View>







      <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 20, paddingHorizontal: 20 }}>
        <View style={{ backgroundColor: "#e8eef2", height: 50, width: 50, borderRadius: 10, justifyContent: 'center', alignItems: "center" }}>
          <Image style={{ height: 25, width: 25, }} resizeMode='cover' source={require("../assets/calendar.png")} />
        </View>

        <View style={{ marginLeft: 15, flex: 1, }}>
          <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>Appointments</Text>
          <Text style={{ color: "#5e7783", fontSize: 14, fontWeight: "500" }}>Meet with a career counselor</Text>
        </View>

        <Image source={require("../assets/next.png")} style={{ height: 20, width: 30 }} resizeMode='cover' />
      </View>







      <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 20, paddingHorizontal: 20 }}>
        <View style={{ backgroundColor: "#e8eef2", height: 50, width: 50, borderRadius: 10, justifyContent: 'center', alignItems: "center" }}>
          <Image style={{ height: 25, width: 25, }} resizeMode='cover' source={require("../assets/chat.png")} />
        </View>

        <View style={{ marginLeft: 15, flex: 1, }}>
          <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>Resume Reviews</Text>
          <Text style={{ color: "#5e7783", fontSize: 14, fontWeight: "500" }}>Get feedback on your resume</Text>
        </View>

        <Image source={require("../assets/next.png")} style={{ height: 20, width: 30 }} resizeMode='cover' />
      </View>







      <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 20, paddingHorizontal: 20 }}>
        <View style={{ backgroundColor: "#e8eef2", height: 50, width: 50, borderRadius: 10, justifyContent: 'center', alignItems: "center" }}>
          <Image style={{ height: 30, width: 30, }} resizeMode='cover' source={require("../assets/document.png")} />
        </View>

        <View style={{ marginLeft: 15, flex: 1, }}>
          <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>Handshake</Text>
          <Text style={{ color: "#5e7783", fontSize: 14, fontWeight: "500" }}>Access thousands of job postings</Text>
        </View>

        <Image source={require("../assets/next.png")} style={{ height: 20, width: 30 }} resizeMode='cover' />
      </View>





      <Text style={{ color: "black", fontSize: 24, fontWeight: "800", marginTop: 35, paddingHorizontal: 20 }}>Upcoming Events</Text>



      <ScrollView horizontal style={{ flexDirection: "row", marginTop: 20, gap: 10, }}>
        <View style={{ marginLeft: 20 }}>
          <Image source={require("../assets/school.jpeg")} style={{ height: 150, width: 250, borderRadius: 15, marginBottom: 10 }} resizeMode='cover' />
          <Text style={{ color: "#000", fontSize: 16, fontWeight: "500" }}>Grad School Fair</Text>
          <Text style={{ color: "#5e7783", fontSize: 14, fontWeight: "500" }}>Mar 19, 2023</Text>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Image source={require("../assets/school.jpeg")} style={{ height: 150, width: 250, borderRadius: 15, marginBottom: 10 }} resizeMode='cover' />
          <Text style={{ color: "#000", fontSize: 16, fontWeight: "500" }}>Grad School Fair</Text>
          <Text style={{ color: "#5e7783", fontSize: 14, fontWeight: "500" }}>Mar 19, 2023</Text>
        </View>
      </ScrollView>





      <Text style={{ color: "black", fontSize: 24, fontWeight: "800", marginTop: 30, paddingHorizontal: 20 }}>Resources</Text>

      {['Resume Guide', 'Interview Prep', 'Salary Negotiation'].map((e) => (

        <View key={e} style={{ flexDirection: 'row', alignItems: "center", marginTop: 20, paddingHorizontal: 20 }}>
          <View style={{ backgroundColor: "#e8eef2", height: 50, width: 50, borderRadius: 10, justifyContent: 'center', alignItems: "center" }}>
            <Image style={{ height: 25, width: 25, }} resizeMode='cover' source={require("../assets/bookmark.png")} />
          </View>

          <View style={{ marginLeft: 15, flex: 1, }}>
            <Text style={{ color: "black", fontSize: 17, fontWeight: "500" }}>{e}</Text>
          </View>

          <Image source={require("../assets/next.png")} style={{ height: 20, width: 30 }} resizeMode='contain' />
        </View>
      ))
      }





      <View style={{ height: 30 }} />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  t1: {
    color: "black",
    fontWeight: "700",
    fontSize: 34,
    marginTop: 15
    , paddingHorizontal: 20
  }
})