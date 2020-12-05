import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      backgroundColor: '#000',
      alignItems: "center",
      justifyContent: "center",
      maxHeight: '38%',
      width: '75%',
      padding: 10,
      position: "relative",
    },
    title: {
      position: "absolute",
      top: 15,
      left: 15,
      color: '#fff',
      fontSize: 18,
    },
    input: {
      backgroundColor: '#DCDCDC',
      minWidth: '100%',
      borderColor: '#DCDCDC',
      marginTop: 12,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
    },
    footer: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column"
    },
    mainButton: {
      marginTop: 16,
      backgroundColor: 'green',
      width: '50%',
      minHeight: 25,
      borderColor: 'green',
      borderRadius: 7,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    mainButtonText: {
      color: 'white',
      fontSize: 16,
    },
    secondaryButton: {
      marginTop: 12,
    },
    secondaryButtonText: {
      color: '#fff',
      fontSize: 12,
    },
});

export default styles;
