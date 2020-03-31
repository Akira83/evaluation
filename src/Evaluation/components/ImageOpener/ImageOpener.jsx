import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { styles } from './ImageOpener.css';

const ImageOpener = () => {
  const [imageSrc, setImageSrc] = useState('./assets/splash.png');

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
    if (permission) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
      if (!result.cancelled) {
        setImageSrc(result.uri);
      }
    }
  };

  return (
    <TouchableOpacity
      style={styles.contentArea}
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
