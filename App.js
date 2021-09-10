import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import Footer from './src/components/Footer';
import Form from './src/components/Forms';
import Result from './src/components/Result';
import colors from './src/utils/colors';


export default function App(){
  const [name, setName] = useState(null)
  const [salario, setSalario] = useState(0)
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (name && salario) calculate();
    else reset();
  }, [name, salario]);

  const calculate = () => {
    reset();
    if (!name) {
      setErrorMessage('Ingrese su nombre');
    }else if (!salario) {
      setErrorMessage('Ingrese su salario por favor')
    }else{
      const isss = salario * 0.03;
      const afp = salario * 0.04;
      const rent = salario * 0.05;
      const deducciones = isss + afp + rent;
      setTotal({
        ISSS: isss.toFixed(2),
        AFP: afp.toFixed(2),
        Renta: rent.toFixed(2),
        totalPayable:(salario - deducciones).toFixed(2)
      });
    }
  }

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return(
    <>
      <View style={styles.Body}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.Header}>
          <Text style={styles.Title}>Calculadora de Salario</Text>
          <Form
            setName={setName}
            setSalario={setSalario}
          />
        </SafeAreaView>
        <Result
          name={name}
          salario={salario}
          total={total}
          errorMessage={errorMessage}
        />
        <Footer calculate={calculate}></Footer>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  Body: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: '100%',
  },

  Header:{
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center',
    color: colors.PRIMARY_COLOR_TEXT
  },

  Title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.PRIMARY_COLOR_TEXT,
    marginTop: 10,
  },
});