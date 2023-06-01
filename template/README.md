# Fast React Native Template for Seonpark

빠른 개발을 위해 자주 사용하는 라이브러리를 합쳐놓았습니다.

### Source By
- https://github.com/pksung1/fast-react-native/tree/master/template

### Editor
- Dmonster 김경태

### Edit Scadule
- 2023-06-01 작업시작

## Folder Architecture
- @/assets : 이미지, lottie 를 관리합니다.
- @/components : 앱의 컴포넌트를 관리합니다.
  - /atoms : 기본 컴포넌트를 모아두었습니다
  - /molecules : 기본 컴포넌트를 활용해 만든 순수 컴포넌트입니다.
  - /organisms : atom, molecules 를 활용해 만든 컴포넌트입니다. (헤더, 푸터 등)
  - /screens : navigation 에서 사용되는 스크린입니다.
- @/hooks : react hooks 를 관리합니다. (타어머 등..)
- @/i18n : 다국어를 관리합니다.
- @/lib : 라이브러리를 생성하거나 관리합니다.
- @/navigation : 네비게이션 코드를 작성합니다.
- @/store : 앱 상태관리를 위한 redux store 입니다.
- @/themes : 테마 색상, 폰트등을 관리합니다.

## Tech Stack

### Language
- [Typescript](https://www.typescriptlang.org/)

### Data store FLUX 패턴을 위한 데이터관리
- [redux-toolkit](https://redux-toolkit.js.org/)

### API Fetch 비동기 요청 처리
- [redux-thunk with redux-toolkit](https://redux-toolkit.js.org/api/createAsyncThunk)

### Navigation 앱 라우팅 작업
- [react-navigation 6.x](https://reactnavigation.org/)
- [react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator)
- [react-navigation/material-top-tabs](https://reactnavigation.org/docs/material-top-tab-navigator)

### Localization 다국어 지원
- [i18n-js](https://github.com/fnando/i18n-js)
- [react-native-localize](https://github.com/zoontek/react-native-localize)

### More
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) 스플래시 스크린 커스터마이징

