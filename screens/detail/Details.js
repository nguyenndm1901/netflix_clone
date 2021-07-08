import React from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';

import { Button, HintLayout, LoadingLayout, Text } from 'ui/general';
import { useDetailsState } from 'providers/details';
import Heading from './Heading';
import Recommended from './Recommended';
import VideoPlayer from './VideoPlayer';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'stretch',
  },
  action: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  overview: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  details: {
    flex: 1,
  },
  rating: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  comment: {
    flexDirection: 'column',
    marginBottom: 10,
  }
});

function Details() {
  const { isLoading, error, data } = useDetailsState();

  if (isLoading) {
    return <LoadingLayout />;
  } else if (error) {
    return <HintLayout message="Failed to load details!" />;
  } else if (data) {
    return (
      <View style={styles.root}>
        <VideoPlayer />
        <ScrollView style={styles.details}>
          <Heading />
          <View style={styles.rating}>
              <Text>Rate: ★★★★★</Text>
          </View>
        <Text size="large">Comments</Text>
          <View style={styles.comment}>
            <Text size="medium">User</Text>
          <Text size="medium">Very good movie to watch with family</Text>
        </View>
          {Boolean(data.homepage) && (
            <Button
              onPress={() => Linking.openURL(data.homepage)}
              style={styles.action}
              icon="external-link"
              label="Visit website"
            />
          )}
          {Boolean(data.overview) && (
            <Text style={styles.overview} size="small">
              {data.overview}
            </Text>
          )}
          <Recommended />
        </ScrollView>
      </View>
    );
  } else {
    return null;
  }
}

export default Details;
