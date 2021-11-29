import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';



class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = ({
      markers :[
        {title: '1', coordinate: {latitude: 39.961178, longitude: -82.998795}},
        {title: '2', coordinate: {latitude: 40.0992294, longitude: -83.1140771}}
      ]
  });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} 
          initialRegion={{
            latitude: 39.961178,
            longitude: -82.998795,
            latitudeDelta: 0.35,
            longitudeDelta: 0.35}}>

            {this.state.markers.map((marker ,i)=>(
              <MapView.Marker
                key={i}
                coordinate={marker.coordinate}
                title={'hello'}
                description={"description"} />
            ))}

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
}); 

export default App;