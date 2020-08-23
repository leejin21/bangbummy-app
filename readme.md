# 한이음-스마트 방범 모바일 어플리케이션

본 프로젝트는 2020년도에 진행된 한이음 스마트 방범 프로젝트 "방버미"의 모바일 어플리케이션을 구현한 것이다.

## Environments

versions는 다음과 같다.

|  expo   | expo-cli | expo-font | expo-status-bar |  react   | react-dom | react-native | react-native-web |
| :-----: | :------: | :-------: | :-------------: | :------: | :-------: | :----------: | :--------------: |
| ~38.0.8 | 3.21.12  |  ~8.2.2   |     ~1.0.2      | ~16.11.0 | ~16.11.0  |  sdk-38.0.2  |     ~0.11.7      |

이때 "react-native" 관련해서는 여기 참고하기 => "https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz"
언급하지 않은 패키지들은 package.json을 참고

## Issues

### authorization

> switch navigator 이용하기: animation은 나중에 적용

-   register&login

    -   처음 회원가입하면 로그인 스킵: 로그인 화면 생략하고 api 보낼 수 있게 하기
    -   평소 자동 로그인 상태 유지: async-storage 이용

-   main screen&logout: 상단의 프로필 누르고 로그아웃 및 탈퇴, 회원 정보 수정 가능(즉시 적용)

    -   asnync storage에서 로그아웃 가능하게 하기
    -   회원 정보 수정은 end point 잘 연결해서 하기, 수정 제출 이후 바로 수정된 것 표시
    -   회원 탈퇴 이후 login 화면으로 가게 하기

-   logout&login: 로그아웃하면 로그인 화면으로

    -   logout 이후 login 화면으로 보내 주기
    -   login 화면에서 또 register 화면으로 갈 수 있게 버튼 만들어 주기
