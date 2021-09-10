import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../utils/colors';

export default function Result(props) {
    const {name, salario, total, errorMessage} = props;

    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>
                    <DataResult title="Nombre del Empleado:" value={`${name}`} />
                    <DataResult title="Salario $:" value={`$${salario}`} />
                    <DataResult title="ISSS:" value={`$${total.ISSS}`} />
                    <DataResult title="AFP:" value={`$${total.AFP}`} />
                    <DataResult title="Renta:" value={`$${total.Renta}`} />
                    <DataResult
                    title="Salario neto:"
                    value={`$${total.totalPayable}`}
                    />
                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}

function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
          <View style={{borderRightColor: colors.PRIMARY_BORDER_COLOR, borderRightWidth: 2, width:'50%'}}>
            <Text style={{color:'#faaa8d', fontSize: 15}}>{title}</Text>
          </View>
          <View>
            <Text style={{color: '#ffebc6', fontSize: 15}}>{value}</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
      marginHorizontal: 30,
    },
  
    boxResult: {
      padding: 30,
    },
  
    title: {
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#d4c4ae',
      borderBottomWidth: 2,
      borderBottomColor: colors.PRIMARY_BORDER_COLOR
    },
  
    value: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
  
    error: {
      textAlign: 'justify',
      color: colors.SECONDARY_COLOR_TEXT,
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 10,
      width: '75%',
    },
  
    viewError: {
      marginTop: '30%',
      width: '80%',
      marginLeft: '12%',
      flexDirection: 'row',
      backgroundColor: colors.SECONDARY_COLOR,
    },
});