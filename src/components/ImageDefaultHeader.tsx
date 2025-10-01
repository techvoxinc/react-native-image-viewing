/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { File, Directory, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title?: string;
  onRequestClose: () => void;
  image: Object;
  ShareIcon: any;
};

const HIT_SLOP = { top: 16, left: 16, bottom: 16, right: 16 };

const ImageDefaultHeader = ({
  onRequestClose,
  image,
  ShareIcon = <Text style={styles.closeText}>v</Text>,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const COLOR_WHITE = "#FFF";

  const shareFile = async (image: any) => {
    const destination = new Directory(Paths.cache);
    setLoading(true);
    try {
      if (!destination.exists) {
        destination.create();
      }
      const res = await File.downloadFileAsync(image.uri, destination);
      res.exists && (await Sharing.shareAsync(res.uri));
    } catch (e) {
      console.error("Error sharing file:", e);
    } finally {
      setLoading(false);
      destination.delete();
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.space} />
        {loading ? (
          <View style={styles.closeButton}>
            <ActivityIndicator color={COLOR_WHITE} />
          </View>
        ) : (
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => shareFile(image)}
            hitSlop={HIT_SLOP}
          >
            {ShareIcon}
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.closeButton}
          onPress={onRequestClose}
          hitSlop={HIT_SLOP}
        >
          <Text style={styles.closeText}>x</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#00000077",
  },
  container: {
    flex: 1,
    padding: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  space: {
    width: 45,
    height: 45,
    alignItems: "center",
  },
  closeButton: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    lineHeight: 25,
    fontSize: 25,
    paddingTop: 2,
    includeFontPadding: false,
    color: "#FFF",
  },
});

export default ImageDefaultHeader;
