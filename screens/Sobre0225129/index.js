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
        style={styles.ImageBackground_109_1500}
      />
      <View style={styles.View_404_308}>
        <Text style={styles.Text_404_308}>Login</Text>
      </View>
      <View style={styles.View_25_8} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9380/eaf4/05f0833ca819555b986b67356f1b8681"
        }}
        style={styles.ImageBackground_25_14}
      />
      <View style={styles.View_43_504}>
        <View style={styles.View_I43_504_33_227}>
          <View style={styles.View_I43_504_33_227_31_265} />
        </View>
        <View style={styles.View_I43_504_33_324}>
          <Text style={styles.Text_I43_504_33_324}>Sair</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9e7/d469/a40990703e2b455db867807f86bde8d3"
          }}
          style={styles.ImageBackground_I43_504_33_212}
        />
      </View>
      <View style={styles.View_109_1499}>
        <View style={styles.View_26_48} />
        <View style={styles.View_26_49}>
          <Text style={styles.Text_26_49}>Auditor Token Fiscal v 0.912</Text>
        </View>
        <View style={styles.View_108_7}>
          <Text style={styles.Text_108_7}>
            Computadores e Sistemas Ind e Com LTDA
          </Text>
        </View>
        <View style={styles.View_108_6}>
          <Text style={styles.Text_108_6}>
            Prefeitura Municipal São José dos Campos Todos os direitos
            reservados Desenvolvido por:
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f099/49dd/3a398188f62bd016bf1bd5038ff7f00d"
          }}
          style={styles.ImageBackground_26_62}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b714/57d5/a1ee478069bb05d97163f2fc55f7bd69"
          }}
          style={styles.ImageBackground_25_1}
        />
      </View>
      <View style={styles.View_402_9}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d48/b529/3a9a7157bb5f0a82e115b8e23242e039"
          }}
          style={styles.ImageBackground_I402_9_402_6}
        />
        <View style={styles.View_I402_9_402_7}>
          <Text style={styles.Text_I402_9_402_7}>
            PREFEITURA SÃO JOSÉ DOS CAMPOS
          </Text>
        </View>
      </View>
      <View style={styles.View_404_312}>
        <View style={styles.View_I404_312_31_299}>
          <View style={styles.View_I404_312_31_299_31_265} />
        </View>
        <View style={styles.View_I404_312_33_273}>
          <Text style={styles.Text_I404_312_33_273}>Sobre</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1446/9af6/b378939ec327b601b71baa9b783cb688"
          }}
          style={styles.ImageBackground_I404_312_31_318}
        />
      </View>
      <View style={styles.View_404_324}>
        <Text style={styles.Text_404_324}>Auditor Token Fiscal</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_109_1500: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_404_308: {
    width: wp("16.944444444444446%"),
    top: hp("36.5625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.388888888888886%")
  },
  Text_404_308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.04320000171661377,
    textTransform: "none"
  },
  View_25_8: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.75%"),
    minHeight: hp("3.75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("88.75%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_25_14: {
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
  View_43_504: {
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
  View_I43_504_33_227: {
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
  View_I43_504_33_227_31_265: {
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
  View_I43_504_33_324: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("6.5625%")
  },
  Text_I43_504_33_324: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I43_504_33_212: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3.1254565715789795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("1.5625%")
  },
  View_109_1499: {
    width: wp("69.44444444444444%"),
    minWidth: wp("69.44444444444444%"),
    height: hp("30.46875%"),
    minHeight: hp("30.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.555555555555555%"),
    top: hp("35.625%")
  },
  View_26_48: {
    width: wp("69.44444444444444%"),
    minWidth: wp("69.44444444444444%"),
    height: hp("30.46875%"),
    minHeight: hp("30.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_26_49: {
    width: wp("50.83333333333333%"),
    minWidth: wp("50.83333333333333%"),
    minHeight: hp("2.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.444444444444445%"),
    top: hp("4.21875%")
  },
  Text_26_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.025200001001358035,
    textTransform: "none"
  },
  View_108_7: {
    width: wp("64.44444444444444%"),
    minWidth: wp("64.44444444444444%"),
    minHeight: hp("2.1875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4999999999999982%"),
    top: hp("25.9375%")
  },
  Text_108_7: {
    color: "rgba(0, 108, 181, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  View_108_6: {
    width: wp("43.611111111111114%"),
    minWidth: wp("43.611111111111114%"),
    minHeight: hp("10.9375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.055555555555555%"),
    top: hp("9.375%")
  },
  Text_108_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_26_62: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.125%"),
    minHeight: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_25_1: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("4.379562139511108%"),
    minHeight: hp("4.379562139511108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.611111111111107%"),
    top: hp("20.78125%"),
    resizeMode: "cover"
  },
  View_402_9: {
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
  ImageBackground_I402_9_402_6: {
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
  View_I402_9_402_7: {
    flexGrow: 1,
    width: wp("35.55555555555556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.9444444444444429%"),
    top: hp("8.28125%")
  },
  Text_I402_9_402_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.019800000786781312,
    textTransform: "none"
  },
  View_404_312: {
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
  View_I404_312_31_299: {
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
  View_I404_312_31_299_31_265: {
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
  View_I404_312_33_273: {
    flexGrow: 1,
    width: wp("8.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: hp("6.5625%")
  },
  Text_I404_312_33_273: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0.021600000858306885,
    textTransform: "none"
  },
  ImageBackground_I404_312_31_318: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("3.125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: hp("1.5625%")
  },
  View_404_324: {
    width: wp("37.77777777777778%"),
    top: hp("21.71875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.38888888888889%")
  },
  Text_404_324: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.04320000171661377,
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
