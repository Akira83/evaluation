import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

const ImageOpener = () => {
  const [imageSrc, setImageSrc] = useState('file:///Users/mserikawa/Library/Developer/CoreSimulator/Devices/783E5924-C377-40AD-9AEB-089A8BCE7C67/data/Containers/Data/Application/1E4A909B-C588-407B-8713-9704DAA573DF/Library/Caches/ExponentExperienceData/%2540anonymous%252Feval-705c736e-98cf-47cd-a9cd-9c8b1748a217/ImagePicker/09E89960-01F7-484B-9EBF-AB3E57EB7ACC.jpg');

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      return status;
    }
  }

  _pickImage = async () => {
    const permission = await getPermissionAsync();
    console.log('Permission: ', permission);
    if (permission) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
      if (!result.cancelled) {
        console.log('Result uri: ', result.uri);
        setImageSrc(result.uri);
      }
    }
  };

  return (
    <TouchableOpacity
    onPress={_pickImage}
  >
      <Image
        style={styles.image}
        source={{ uri: imageSrc }}
      />
  </TouchableOpacity>
  );
}

export default ImageOpener;
