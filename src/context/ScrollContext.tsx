import React, {useState, useEffect} from 'react';
import {ScrollView as ScrollViewNative, ScrollViewProps} from 'react-native';

export interface ScrollContextInterface {
  opacity: number;
  maxOffset: number;
  offset: number;
  titleShowing: boolean;
  updateOffset(val: number): void;
}

const withinLimits = (val: number, min: nuber, max: number): number =>
  val > max ? max : val < min ? min : val;

export const ScrollContext = React.createContext<ScrollContextInterface>({
  opacity: 0,
  maxOffset: 0,
  offset: 0,
  titleShowing: false,
  updateOffset: (val: nuber) => {},
});

export const useScroller = () => React.useContext(ScrollContext);

export const ScrollContextProvider = (props: JSX.Element[] | JSX.Element) => {
  const minOffset: number = 0;
  const maxOffset: number = 30;

  const [offset, setOffset] = useState(0);
  const [titleShowing, setTitleShowing] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const updateOffset = (val: nubmer) => {
    setOffset(withinLimits(val, minOffset, maxOffset));
    setTitleShowing(val > maxOffset);
    setOpacity(withinLimits((val * maxOffset) / 1000, 0, 1));
  };

  return (
    <ScrollContext.Provider
      value={{
        opacity: opacity,
        maxOffset: maxOffset,
        offset: offset,
        titleShowing: titleShowing,
        updateOffset: updateOffset,
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
