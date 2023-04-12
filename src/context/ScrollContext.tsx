import React, {useState, useEffect} from 'react';
import {ScrollView as ScrollViewNative, ScrollViewProps} from 'react-native';

export interface ScrollContextInterface {
  opacity: number;
  maxOffset: number;
  fadeOffset: number;
  titleShowing: boolean;
  scrollOffsetY: number;
  updateOffset(val: number): void;
}

const withinLimits = (val: number, min: nuber, max: number): number =>
  val > max ? max : val < min ? min : val;

export const ScrollContext = React.createContext<ScrollContextInterface>({
  opacity: 0,
  maxOffset: 0,
  fadeOffset: 0, // Header Animation for Fade in / out
  titleShowing: false,
  scrollOffsetY: 0, // Header Animation for translate position Y
  updateOffset: (val: nuber) => {},
});

export const useScroller = () => React.useContext(ScrollContext);

export const ScrollContextProvider = (props: JSX.Element[] | JSX.Element) => {
  const minOffset: number = 0;
  const maxOffset: number = 30;

  const [fadeOffset, setFadeOffset] = useState(0);
  const [titleShowing, setTitleShowing] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [scrollOffsetY, setScrollOffsetY] = useState(0);

  const updateOffset = (val: nubmer) => {
    setFadeOffset(withinLimits(val, minOffset, maxOffset));
    setTitleShowing(val > maxOffset);
    setOpacity(withinLimits((val * maxOffset) / 1000, 0, 1));
    setScrollOffsetY(val);
  };

  return (
    <ScrollContext.Provider
      value={{
        opacity: opacity,
        maxOffset: maxOffset,
        fadeOffset: fadeOffset,
        titleShowing: titleShowing,
        updateOffset: updateOffset,
        scrollOffsetY: scrollOffsetY,
      }}>
      {props.children}
    </ScrollContext.Provider>
  );
};

export const ScrollView = (
  props: (JSX.Element[] | JSX.Element) & ScrollViewProps,
) => {
  const {updateOffset} = useScroller();
  return (
    <ScrollViewNative
      {...props}
      onScroll={({nativeEvent}) => {
        updateOffset(nativeEvent.contentOffset.y);
      }}
      scrollEventThrottle={200}>
      {props.children}
    </ScrollViewNative>
  );
};
export default ScrollContextProvider;
