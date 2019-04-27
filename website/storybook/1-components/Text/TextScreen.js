import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import UIExplorer, {AppText, Description, storiesOf} from '../../ui-explorer';

import {NavBar} from '../../../../dist';

const TextScreen = () => (
  <UIExplorer title="Text" url="1-components/Text">
    <Description>
      <AppText>
        Text is component for displaying text. It supports style, basic touch
        handling, and inherits typographic styles from ancestor elements.
      </AppText>

      <AppText>
        BaraJS
      </AppText>
    </Description>
  </UIExplorer>
);

storiesOf('Components', module).add('Text', TextScreen);
