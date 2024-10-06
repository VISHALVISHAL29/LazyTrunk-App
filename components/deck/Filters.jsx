//Filter.jsx
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import React, { useState } from 'react';

export default function Filters() {
  const filterComponent = [
    {
      id: 1,
      imgURL: require('../../assets/devImage/silly.png'),
      name: 'FUNNY',
      cards: '110',
      color: '#72de0d', // Green
    },
    {
      id: 2,
      imgURL: require('../../assets/devImage/awkward.png'),
      name: 'AWKWARD',
      cards: '70',
      color: '#E2725B', // Light Red
    },
    {
      id: 3,
      imgURL: require('../../assets/devImage/adult.png'),
      name: 'ADULT',
      cards: '90',
      color: '#6bed07', // Lime Green
    },
    {
      id: 4,
      imgURL: require('../../assets/devImage/worry.png'),
      name: 'SERIOUS',
      cards: '50',
      color: '#D74426', // Red
    },
  ];

  const [toggleStates, setToggleStates] = useState(
    filterComponent.map(() => false) // Initialize switch states to false
  );

  const toggleSwitch = (index) => {
    let newToggles = [...toggleStates];
    newToggles[index] = !newToggles[index];
    setToggleStates(newToggles);
  };

  return (
    <View>
      <Text style={styles.text}>FILTERS</Text>

      {filterComponent.map((filter, index) => (
        <View key={filter.id} style={[styles.filterContainer, { backgroundColor: filter.color }]}>
          <View style={styles.filterContent}>
            <Image source={filter.imgURL} style={styles.filterImage} />
            <View>
              <Text style={styles.filterName}>{filter.name}</Text>
              <Text style={styles.cardCount}>{filter.cards} CARDS</Text>
            </View>
          </View>
          <Switch
            value={toggleStates[index]}
            onValueChange={() => toggleSwitch(index)}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={toggleStates[index] ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#fff',
    letterSpacing: 5,
    marginLeft: 20,
    padding: 20,
    fontWeight:'bold'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
  },
  filterContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  filterName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cardCount: {
    fontSize: 12,
    color: '#fff',
  },
});
