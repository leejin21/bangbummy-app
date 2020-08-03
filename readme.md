# 한이음-스마트 방범 모바일 어플리케이션

본 프로젝트는 2020년도에 진행된 한이음 스마트 방범 프로젝트의 모바일 어플리케이션을 구현한 것이다.

## Environments

versions는 다음과 같다.

|  expo   | expo-font | expo-status-bar |  react   | react-dom | react-native | react-native-web |
| :-----: | :-------: | :-------------: | :------: | :-------: | :----------: | :--------------: |
| ~38.0.8 |  ~8.2.2   |     ~1.0.2      | ~16.11.0 | ~16.11.0  |  sdk-38.0.2  |     ~0.11.7      |

이때 "react-native" 관련해서는 여기 참고하기 => "https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz"

## 요구사항

1. navigator에서 font 만지면서 다른 데로 적용 가능하게 하기
2. App.js에서 MainScreen.js, Header.js로 옮기기
3. api 받을 준비하기