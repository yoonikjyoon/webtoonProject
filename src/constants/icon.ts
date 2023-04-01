import {ImageSourcePropType} from 'react-native';
import {ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

interface IconListProps {
  source: ImageSourcePropType;
  width: number;
  height: number;
}
interface IconReturnProps {
  source: ImageSourcePropType;
  style: StyleProp<ImageSytle>;
}

export type IconListKeyType = keyof typeof ICON_LIST;

// https://www.typescriptlang.org/play?#code/C4TwDgpgBA4ghgWwgSQHYDMD2UC8UDeUA2gNYQgBcUAzsAE4CWqA5gLpWHUkMA2PAMhABuEHlQDkzTJgAm4qAB8o4uCLpxmEeUvEAjOHKgBfIwChToSFACiGTHQDGEAPK6AVhAfAAKuAgAebwA+XCh-ADUoCAAPYAhUGWooYIAKISpwgEpcEPCAblMHTFRaKLtHF3dPHz8qWywK1w8vX0h-eCQ0LBC8IRyoIQLC4tKYAEEAWWsAZQAmUPiGpybq1ogU-FMoKABhaZhnDi3tmm4+QRExZSlZcQAaY6MH7YB1Zxejk9PeAWFRCVUEHUmnEj2eUAAIs5vGNPicAPTw3aYBBgXjQIF0exQAC0UAQDGo1CYzCgYCxkDooG+5z+PEepiMmSGlmgHQgAGlyPM8GQQJh0FBWQLYJMZrMhugAK6oLwMYpQTTAdldTCzFJ8qjsrkgWbZTbbOgQYBSuioUVTOakcisApmUxKlV2dXiN4vcTMh3Gp1YF17A4egqOxAoZ0pcQykioTAAd1QHqgiN2zgmAAVkPxrDYAErZ5zZqAACWs2esQA
type IconInfo = {[key: string]: IconListProps};
type EnforceObjectType<T> = <V extends T>(v: V) => V;
const enforceObjectType: EnforceObjectType<IconInfo> = v => v;

const ICON_LIST = enforceObjectType({
  badge_best: {source: require('assets/badge_best.png'), width: 18, height: 18},
  icon_challenge: {
    source: require('assets/icon_challenge.png'),
    width: 30,
    height: 30,
  },
  icon_challenge_on: {
    source: require('assets/icon_challenge_on.png'),
    width: 30,
    height: 30,
  },
  icon_finish: {
    source: require('assets/icon_finish.png'),
    width: 30,
    height: 30,
  },
  icon_finish_on: {
    source: require('assets/icon_finish_on.png'),
    width: 30,
    height: 30,
  },
  icon_more: {source: require('assets/icon_more.png'), width: 30, height: 30},
  icon_more_on: {
    source: require('assets/icon_more_on.png'),
    width: 30,
    height: 30,
  },
  icon_smile: {source: require('assets/icon_smile.png'), width: 30, height: 30},
  icon_smile_on: {
    source: require('assets/icon_smile_on.png'),
    width: 30,
    height: 30,
  },
  icon_webtoon: {
    source: require('assets/icon_webtoon.png'),
    width: 30,
    height: 30,
  },
  icon_webtoon_on: {
    source: require('assets/icon_webtoon_on.png'),
    width: 30,
    height: 30,
  },
  icon_cookie: {
    source: require('assets/icon_cookie.png'),
    width: 18,
    height: 18,
  },
  icon_down: {source: require('assets/icon_down.png'), width: 18, height: 10},
  icon_plus: {source: require('assets/icon_plus.png'), width: 18, height: 18},
  icon_search: {
    source: require('assets/icon_search.png'),
    width: 48,
    height: 48,
  },
  // icon_: {source: require('assets/icon_.png'), width: 0, height: 0},
});

// get icon props
export const getIconProps = (key: IconListKeyType): IconReturnProps => {
  const icon = ICON_LIST[key];
  return {source: icon.source, style: {width: icon.width, height: icon.height}};
};
