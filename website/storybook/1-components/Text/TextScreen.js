import React from 'react';
import {StyleSheet, Text} from 'react-native';

import UIExplorer, {AppText, storiesOf} from '../../ui-explorer';

import {NavBar} from '../../../../dist';

const TextScreen = () => (
  <UIExplorer title="Text" url="1-components/Text">
    <AppText>
      Text is component for displaying text. It supports style, basic touch
      handling, and inherits typographic styles from ancestor elements.
    </AppText>
    <NavBar />
  </UIExplorer>
);

storiesOf('Components', module).add('Text', TextScreen);
