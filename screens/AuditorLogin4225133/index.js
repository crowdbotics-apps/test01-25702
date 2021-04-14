import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5f9/7213/65778b43f770478f9f684001b8be48ce"
        }}
        style={styles.ImageBackground_6_10}
      />
      <View style={styles.View_93_34}>
        <View style={styles.View_36_381} />
        <View style={styles.View_36_382}>
          <Text style={styles.Text_36_382}>Login</Text>
        </View>
      </View>
      <View style={styles.View_43_552}>
        <View style={styles.View_I43_552_33_227}>
          <View style={styles.View_I43_552_33_227_31_265} />
        </View>
        <View style={styles.View_I43_552_33_324}>
          <Text style={styles.Text_I43_552_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I43_552_33_212}
        />
      </View>
      <View style={styles.View_93_32}>
        <Text style={styles.Text_93_32}>Auditor Token Fiscal</Text>
      </View>
      <View style={styles.View_404_304}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d48/b529/3a9a7157bb5f0a82e115b8e23242e039"
          }}
          style={styles.ImageBackground_I404_304_402_6}
        />
        <View style={styles.View_I404_304_402_7}>
          <Text style={styles.Text_I404_304_402_7}>
            PREFEITURA SÃO JOSÉ DOS CAMPOS
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
        }}
        style={styles.ImageBackground_404_307}
      />
      <View style={styles.View_33_454}>
        <View style={styles.View_I33_454_31_299}>
          <View style={styles.View_I33_454_31_299_31_265} />
        </View>
        <View style={styles.View_I33_454_33_273}>
          <Text style={styles.Text_I33_454_33_273}>Sobre</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
          }}
          style={styles.ImageBackground_I33_454_31_318}
        />
      </View>
      <View style={styles.View_33_606} />
      <View style={styles.View_33_607}>
        <Text style={styles.Text_33_607}>Senha</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4407/b5ea/8801d8645a59ec9db32fdf6827f28f65"
        }}
        style={styles.ImageBackground_33_601}
      />
      <View style={styles.View_33_605} />
      <View style={styles.View_33_604}>
        <Text style={styles.Text_33_604}>Usuário</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0149/b154/b8a65c0aed3b11b5449e7bc951e46a5a"
        }}
        style={styles.ImageBackground_49_5}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_6_10: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.15625%"),
    resizeMode: "cover"
  },
  View_93_34: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("63.90625%")
  },
  View_36_381: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 108, 181, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_36_382: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.611111111111114%"),
    top: hp("0.78125%")
  },
  Text_36_382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_552: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.94444444444444%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I43_552_33_227: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I43_552_33_227_31_265: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I43_552_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I43_552_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I43_552_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_93_32: {
    width: wp("37.77777777777778%"),
    top: hp("21.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_93_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.04320000171661377,
    textTransform: "none"
  },
  View_404_304: {
    width: wp("31.512010362413196%"),
    minWidth: wp("31.512010362413196%"),
    height: hp("11.71875%"),
    minHeight: hp("11.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.166666666666664%"),
    top: hp("7.187499999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I404_304_402_6: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("7.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.500000000000007%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I404_304_402_7: {
    flexGrow: 1,
    width: wp("35.55555555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.9444444444444429%"),
    top: hp("8.28125%")
  },
  Text_I404_304_402_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.019800000786781312,
    textTransform: "none"
  },
  ImageBackground_404_307: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.4375000000000004%"),
    minHeight: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_33_454: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_454_31_299: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_454_31_299_31_265: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("6.25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 128, 237, 1)"
  },
  View_I33_454_33_273: {
    flexGrow: 1,
    width: wp("8.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I33_454_33_273: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I33_454_31_318: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("1.5625%")
  },
  View_33_606: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("54.53125%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_33_607: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.888888888888886%"),
    top: hp("55.625%")
  },
  Text_33_607: {
    color: "rgba(188, 189, 190, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_33_601: {
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    top: hp("55.78125000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.333333333333332%")
  },
  View_33_605: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("44.6875%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_33_604: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    minHeight: hp("3.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.388888888888886%"),
    top: hp("45.9375%")
  },
  Text_33_604: {
    color: "rgba(188, 189, 190, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.03240000128746033,
    textTransform: "none"
  },
  ImageBackground_49_5: {
    width: wp("6.25%"),
    minWidth: wp("6.25%"),
    height: hp("3.515625%"),
    minHeight: hp("3.515625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.61111111111111%"),
    top: hp("45.9375%")
  },
  View_2: { height: 640 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
