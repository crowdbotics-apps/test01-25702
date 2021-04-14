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
      <View style={styles.View_73_106} />
      <View style={styles.View_73_108}>
        <View style={styles.View_I73_108_33_227}>
          <View style={styles.View_I73_108_33_227_31_265} />
        </View>
        <View style={styles.View_I73_108_33_324}>
          <Text style={styles.Text_I73_108_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I73_108_33_212}
        />
      </View>
      <View style={styles.View_73_109}>
        <View style={styles.View_I73_109_33_150}>
          <View style={styles.View_I73_109_33_150_31_265} />
        </View>
        <View style={styles.View_I73_109_33_321}>
          <Text style={styles.Text_I73_109_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I73_109_33_180}
        />
      </View>
      <View style={styles.View_404_283}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I404_283_8_1}
        />
        <View style={styles.View_I404_283_26_68}>
          <Text style={styles.Text_I404_283_26_68}>Auditor Token Fiscal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I404_283_22_0}
        />
        <View style={styles.View_I404_283_106_0}>
          <Text style={styles.Text_I404_283_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I404_283_301_2401}
        />
      </View>
      <View style={styles.View_505_164}>
        <View style={styles.View_503_172} />
        <View style={styles.View_503_173}>
          <Text style={styles.Text_503_173}>Serviços de Beleza LTDA ME</Text>
        </View>
        <View style={styles.View_503_179}>
          <Text style={styles.Text_503_179}>12.345.678/0001-22</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59ac/4f97/9d076b3daf21cf1f1771e134ebd65e8d"
          }}
          style={styles.ImageBackground_503_175}
        />
      </View>
      <View style={styles.View_515_0}>
        <View style={styles.View_513_1}>
          <Text style={styles.Text_513_1}>Resultado</Text>
        </View>
        <View style={styles.View_409_0}>
          <Text style={styles.Text_409_0}>Situacao</Text>
        </View>
        <View style={styles.View_513_0}>
          <Text style={styles.Text_513_0}>Icone</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_73_106: {
    width: wp("100.55555555555556%"),
    minWidth: wp("100.55555555555556%"),
    height: hp("5.625%"),
    minHeight: hp("5.625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94.375%"),
    backgroundColor: "rgba(211, 238, 255, 1)"
  },
  View_73_108: {
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
  View_I73_108_33_227: {
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
  View_I73_108_33_227_31_265: {
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
  View_I73_108_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I73_108_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I73_108_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_73_109: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: hp("8.75%"),
    minHeight: hp("8.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("90.3125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_109_33_150: {
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
  View_I73_109_33_150_31_265: {
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
  View_I73_109_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I73_109_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I73_109_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_404_283: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.812499999999998%"),
    minHeight: hp("12.812499999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I404_283_8_1: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("9.375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.4375000000000004%"),
    resizeMode: "cover"
  },
  View_I404_283_26_68: {
    flexGrow: 1,
    width: wp("61.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("5.9375%")
  },
  Text_I404_283_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.04320000171661377,
    textTransform: "none"
  },
  ImageBackground_I404_283_22_0: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3.4375000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I404_283_106_0: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I404_283_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I404_283_301_2401: {
    flexGrow: 1,
    width: wp("12.357652452256945%"),
    height: hp("5.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.61111111111111%"),
    top: hp("4.0625%"),
    resizeMode: "cover"
  },
  View_505_164: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.5%"),
    minHeight: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.812499999999998%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_503_172: {
    width: wp("100%"),
    height: hp("6.875000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(51, 98, 130, 1)"
  },
  View_503_173: {
    width: wp("50%"),
    top: hp("0.6250000000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_503_173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_503_179: {
    width: wp("36.666666666666664%"),
    top: hp("3.5937500000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.833333333333334%")
  },
  Text_503_179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_503_175: {
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    top: hp("2.0312500000000018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  View_515_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.4375%"),
    minHeight: hp("8.4375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.40625%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_513_1: {
    width: wp("17.77777777777778%"),
    minWidth: wp("17.77777777777778%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    top: hp("4.0625%")
  },
  Text_513_1: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_409_0: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    top: hp("0.3125%")
  },
  Text_409_0: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_513_0: {
    width: wp("9.722222222222223%"),
    minWidth: wp("9.722222222222223%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777778%"),
    top: hp("0.15625%")
  },
  Text_513_0: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
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
