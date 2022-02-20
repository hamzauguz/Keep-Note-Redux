import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInput } from '../redux/actions/inputActions'

function InputProcess(props) {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const [isim, setIsim] = useState(null)
  const input = useSelector((state) => state.input)
  console.log(isim)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        {input.map((item, index) => {
          return (
            <Text style={styles.text} key={index}>
              {item}
            </Text>
          )
        })}
      </View>
      <View style={styles.width}>
        <TextInput
          value={isim}
          onChangeText={setIsim}
          placeholder="hamza"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.buton}
          onPress={() => dispatch(addInput(isim))}
        >
          <Text style={styles.item}>Not Ekle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#c47592',
    alignItems: 'center',
  },
  list: {
    borderRadius: 10,
    width: '90%',
    height: '60%',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    height: 50,
    color: 'black',
    fontWeight: '700',
    borderRadius: 10,
    borderWidth: 2,
    width: '100%',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  input: {
    backgroundColor: '#869599',
    width: '100%',
    height: 50,
    borderRadius: 10,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  buton: {
    backgroundColor: '#83ba37',
    height: 60,
    marginBottom: 30,

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  width: { width: '90%' },
  item: {
    fontSize: 30,
    color: '#b1d3d0',
  },
})
export default InputProcess
