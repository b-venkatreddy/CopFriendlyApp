import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Svg, Circle, G, Text as SvgText } from 'react-native-svg';

const SOSAlert = ({ onCancel }) => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
        onCancel();
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="red"
          strokeWidth="5"
          fill="transparent"
        />
        <SvgText
          x="50"
          y="40"
          fontSize="24"
          fontWeight="bold"
          textAnchor="middle"
          fill="#fff"
        >
          {timer}
        </SvgText>
        <SvgText
          x="50"
          y="80"
          fontSize="24"
          fontWeight="bold"
          textAnchor="middle"
          fill="#fff"
        >
          SOS
        </SvgText>
      </Svg>
      <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30%',
    left: '10%',
    width: '80%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SOSAlert;
