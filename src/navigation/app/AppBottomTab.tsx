import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import colors from '../../assets/colors';
import Icon from '../../assets/icons';
import useStyles from './styles';

interface AppBottomTabProps extends BottomTabBarProps {}

const AppBottomTab = ({state, navigation}: AppBottomTabProps) => {
  const styles = useStyles();

  return (
    <>
      <View style={{backgroundColor: colors.primary}}>
        <View style={styles.container}>
          {state?.routes?.map((route, index) => {
            const isFocused = state.index === index;
            const fillStroke = isFocused ? colors.primary : '#838384';

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route?.name, route?.params);
              }
            };

            const TabIcon = () =>
              index === 0 ? (
                <Icon.Dashboard stroke={fillStroke} />
              ) : index === 1 ? (
                <Icon.Add stroke={fillStroke} />
              ) : (
                <Icon.Stocks stroke={fillStroke} />
              );
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                key={index}>
                <TabIcon />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default memo(AppBottomTab);
