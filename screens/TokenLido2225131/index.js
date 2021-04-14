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
      <View style={styles.View_407_1002} />
      <View style={styles.View_407_1003}>
        <View style={styles.View_I407_1003_33_227}>
          <View style={styles.View_I407_1003_33_227_31_265} />
        </View>
        <View style={styles.View_I407_1003_33_324}>
          <Text style={styles.Text_I407_1003_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I407_1003_33_212}
        />
      </View>
      <View style={styles.View_407_1004}>
        <Text style={styles.Text_407_1004}>Token Fiscal</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/b9a0/afe97dd3c136572f5dab492672a4f284"
        }}
        style={styles.ImageBackground_407_1010}
      />
      <View style={styles.View_407_1011}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ea/b08d/42a62f338b8c6a315126242503052db0"
          }}
          style={styles.ImageBackground_I407_1011_8_1}
        />
        <View style={styles.View_I407_1011_26_68}>
          <Text style={styles.Text_I407_1011_26_68}>Auditor Token Fiscal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
          }}
          style={styles.ImageBackground_I407_1011_22_0}
        />
        <View style={styles.View_I407_1011_106_0}>
          <Text style={styles.Text_I407_1011_106_0}>São José dos Campos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f58c/50a8/9a342a31ae0b1e7e48d8c4635d74d780"
          }}
          style={styles.ImageBackground_I407_1011_301_2401}
        />
      </View>
      <View style={styles.View_411_958}>
        <View style={styles.View_I411_958_33_150}>
          <View style={styles.View_I411_958_33_150_31_265} />
        </View>
        <View style={styles.View_I411_958_33_321}>
          <Text style={styles.Text_I411_958_33_321}>Voltar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92d1/5193/a359e77e84599942e5cbb617d1b700a4"
          }}
          style={styles.ImageBackground_I411_958_33_180}
        />
      </View>
      <View style={styles.View_425_0}>
        <View style={styles.View_425_1} />
        <View style={styles.View_425_4}>
          <Text style={styles.Text_425_4}>Resumo enviado à retaguarda</Text>
        </View>
      </View>
      <View style={styles.View_253_7}>
        <View style={styles.View_253_8}>
          <View style={styles.View_253_9} />
          <View style={styles.View_253_10}>
            <Text style={styles.Text_253_10}>Prosseguir</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_502_669}>
        <View style={styles.View_408_3}>
          <Text style={styles.Text_408_3}>Resumo NFS-e</Text>
        </View>
        <View style={styles.View_407_1005}>
          <Text style={styles.Text_407_1005}>
            Token Fiscal CS Services v 1.3
          </Text>
        </View>
        <View style={styles.View_502_666}>
          <Text style={styles.Text_502_666}>Série 0001001-02</Text>
        </View>
        <View style={styles.View_502_667}>
          <Text style={styles.Text_502_667}>
            Contribuinte 12.345.678/0001-22
          </Text>
        </View>
        <View style={styles.View_408_2}>
          <Text style={styles.Text_408_2}>Total documentos: 271</Text>
        </View>
        <View style={styles.View_502_668}>
          <Text style={styles.Text_502_668}>
            Valor total emitido: R$ 83.745,00
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1339/b9a0/afe97dd3c136572f5dab492672a4f284"
          }}
          style={styles.ImageBackground_408_1}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_407_1002: {
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
  View_407_1003: {
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
  View_I407_1003_33_227: {
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
  View_I407_1003_33_227_31_265: {
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
  View_I407_1003_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I407_1003_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I407_1003_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_407_1004: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("15.46875%")
  },
  Text_407_1004: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_407_1010: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%"),
    top: hp("20.078125%")
  },
  View_407_1011: {
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
  ImageBackground_I407_1011_8_1: {
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
  View_I407_1011_26_68: {
    flexGrow: 1,
    width: wp("61.38888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("5.9375%")
  },
  Text_I407_1011_26_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.04320000171661377,
    textTransform: "none"
  },
  ImageBackground_I407_1011_22_0: {
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
  View_I407_1011_106_0: {
    flexGrow: 1,
    width: wp("28.055555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.83333333333334%"),
    top: hp("10.15625%")
  },
  Text_I407_1011_106_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  ImageBackground_I407_1011_301_2401: {
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
  View_411_958: {
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
  View_I411_958_33_150: {
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
  View_I411_958_33_150_31_265: {
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
  View_I411_958_33_321: {
    flexGrow: 1,
    width: wp("9.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I411_958_33_321: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I411_958_33_180: {
    flexGrow: 1,
    width: wp("5.833333333333333%"),
    height: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222223%"),
    top: hp("2.03125%")
  },
  View_425_0: {
    width: wp("73.88888888888889%"),
    minWidth: wp("73.88888888888889%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%"),
    top: hp("64.84375%")
  },
  View_425_1: {
    width: wp("73.88888888888889%"),
    minWidth: wp("73.88888888888889%"),
    height: hp("6.406249999999999%"),
    minHeight: hp("6.406249999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(211, 238, 255, 1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  View_425_4: {
    width: wp("66.38888888888889%"),
    minWidth: wp("66.38888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111125%"),
    top: hp("1.40625%")
  },
  Text_425_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_253_7: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666664%"),
    top: hp("86.09375%")
  },
  View_253_8: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
    height: hp("5.78125%"),
    minHeight: hp("5.78125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_253_9: {
    width: wp("36.666666666666664%"),
    minWidth: wp("36.666666666666664%"),
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
  View_253_10: {
    width: wp("18.88888888888889%"),
    minWidth: wp("18.88888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.888888888888893%"),
    top: hp("1.09375%")
  },
  Text_253_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_502_669: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("38.28125%"),
    minHeight: hp("38.28125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.40625%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_408_3: {
    width: wp("33.88888888888889%"),
    minWidth: wp("33.88888888888889%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.88888888888889%"),
    top: hp("21.09375%")
  },
  Text_408_3: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_407_1005: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("2.03125%")
  },
  Text_407_1005: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_502_666: {
    width: wp("40.833333333333336%"),
    minWidth: wp("40.833333333333336%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("7.1875%")
  },
  Text_502_666: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_502_667: {
    width: wp("76.11111111111111%"),
    minWidth: wp("76.11111111111111%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%"),
    top: hp("12.5%")
  },
  Text_502_667: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_408_2: {
    width: wp("53.05555555555556%"),
    minWidth: wp("53.05555555555556%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("29.062499999999993%")
  },
  Text_408_2: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_502_668: {
    width: wp("74.44444444444444%"),
    minWidth: wp("74.44444444444444%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("34.37500000000001%")
  },
  Text_502_668: {
    color: "rgba(51, 98, 130, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_408_1: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.166666666666666%"),
    top: hp("26.25%")
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
