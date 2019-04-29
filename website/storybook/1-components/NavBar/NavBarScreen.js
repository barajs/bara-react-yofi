import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import UIExplorer, {
  AppText,
  Section,
  Description,
  DocItem,
  storiesOf,
} from '../../ui-explorer';

import PropColor from './examples/PropColor';

const NavScreen = () => (
  <UIExplorer title="NavBar" url="1-components/NavBar">
    <Description>
      <AppText>NavBar is a flexible UI Navigation component.</AppText>

      <Section title="Props">
        <DocItem
          name="color"
          typeInfo="?string"
          description="Background color of NavBar"
          example={{
            render: () => <PropColor />,
          }}
        />
      </Section>
    </Description>
  </UIExplorer>
);

storiesOf('Components', module).add('NavBar', NavScreen);
