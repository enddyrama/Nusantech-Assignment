import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button from './component/button';
import Input from './component/input'

interface Props {
  // placeholder: string;
  // onChangeText: (text: string) => void;
  // secureTextEntry?: boolean;
  // route: any;
  //   CheckBox: any
}

const { height, width } = Dimensions.get('screen')

const App = ({ }: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [box1, setBox1] = useState(null)
  const [box2, setBox2] = useState(null)
  const [box3, setBox3] = useState(null)
  const [isChecked1, setisChecked1] = useState(false)
  const [isChecked2, setisChecked2] = useState(false)
  const [isChecked3, setisChecked3] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [result, setResult] = useState(0)
  const [selectedOperator, setSelectedOperator] = useState('+');
  const [operator, setOperator] = useState([
    { name: '+', status: true },
    { name: '-', status: false },
    { name: 'x', status: false },
    { name: '/', status: false },
  ])




  const handleResult = () => {
    let N1 = null
    let N2 = null
    let N3 = null

    if (isChecked1) {
      N1 = parseInt(box1)
    }
    if (isChecked2) {
      N2 = parseInt(box2)
    }
    if (isChecked3) {
      N3 = parseInt(box3)
    }
    if (selectedOperator === '+') {
      if (isChecked1 && isChecked2 && isChecked3) {
        setResult(N1 + N2 + N3)
      } else if (isChecked1 && isChecked2) {
        setResult(N1 + N2)
      } else if (isChecked1 && isChecked3) {
        setResult(N1 + N3)
      } else if (isChecked2 && isChecked3) {
        setResult(N2 + N3)
      } else {
        alert('Error')
        setResult(NaN)
      }

    } else if (selectedOperator === '-') {
      if (isChecked1 && isChecked2 && isChecked3) {
        setResult(N1 - N2 - N3)
      } else if (isChecked1 && isChecked2) {
        setResult(N1 - N2)
      } else if (isChecked1 && isChecked3) {
        setResult(N1 - N3)
      } else if (isChecked2 && isChecked3) {
        setResult(N2 - N3)
      } else {
        alert('Error')
        setResult(NaN)
      }
    } else if (selectedOperator === 'x') {
      if (isChecked1 && isChecked2 && isChecked3) {
        setResult(N1 * N2 * N3)
      } else if (isChecked1 && isChecked2) {
        setResult(N1 * N2)
      } else if (isChecked1 && isChecked3) {
        setResult(N1 * N3)
      } else if (isChecked2 && isChecked3) {
        setResult(N2 * N3)
      } else {
        alert('Error')
        setResult(NaN)
      }
    } else if (selectedOperator === '/') {
      if (isChecked1 && isChecked2 && isChecked3) {
        setResult(N1 / N2 / N3)
      } else if (isChecked1 && isChecked2) {
        setResult(N1 / N2)
      } else if (isChecked1 && isChecked3) {
        setResult(N1 / N3)
      } else if (isChecked2 && isChecked3) {
        setResult(N2 / N3)
      } else {
        alert('Error')
        setResult(NaN)
      }
    }
  }
  const changeOperator = (genre) => {
    setSelectedOperator(genre)
    let updateGenres = operator.map(gen => {
      let obj = gen
      if (gen.name == genre) {
        obj.status = true
      } else {
        obj.status = false
      }
      return obj
    })
    setOperator(updateGenres)
  }

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Input placeholder={'Fill with number'} value={box1} setBox={(e: number) => setBox1(e)} checked={() => setisChecked1(!isChecked1)} />
        <Input placeholder={'Fill with number'} value={box2} setBox={(e: number) => setBox2(e)} checked={() => setisChecked2(!isChecked2)} />
        <Input placeholder={'Fill with number'} value={box3} setBox={(e: number) => setBox3(e)} checked={() => setisChecked3(!isChecked3)} />
      </View>
      <View style={styles.div2}>
        {operator.map((genre, i) =>
          <Button key={i} operator={genre.name} onPress={() => changeOperator(genre.name)} status={genre.status} />
        )}

      </View>
      <View style={{ flexDirection: 'row', width: width / 1.3, justifyContent: 'space-around' }}>
        <TouchableOpacity style={{ marginTop: 40, backgroundColor: '#6E6BF3', borderRadius: 8, padding: 20 }} onPress={() => handleResult()}>
          <Text style={{ fontSize: 20, color: 'white' }}>Press for result:</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 40, backgroundColor: '#6E6BF3', borderRadius: 8, padding: 20 }}>
          <Text style={{ fontSize: 20, color: 'white' }}>
            {result}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  div: {
  },
  div2: {
    flexDirection: 'row'
  }
})


