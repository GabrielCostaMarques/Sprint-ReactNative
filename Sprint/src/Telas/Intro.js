import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';


const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleDotPress = (index) => {
      setActiveIndex(index);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.slidesContainer}>
          {/* Renderize suas telas aqui */}
        </View>
        <View style={styles.dotsContainer}>
          {slides.map((slide, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dot,
                index === activeIndex && styles.activeDot
              ]}
              onPress={() => handleDotPress(index)}
            />
          ))}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    slidesContainer: {
      flex: 1
    },
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'gray',
      marginHorizontal: 5
    },
    activeDot: {
      backgroundColor: 'red'
    }
  });
  