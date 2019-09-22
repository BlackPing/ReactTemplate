# ReactTemplate Project

* Template Rule
  * Front Server - Node.js
  * Back Server - Srping Framework
  * Web Server
  * Socket Client - SockJS
  * props not used, state used

## Develoment - 2019-09-17

Project Start

### 리액트 개발 환경 구성

#### 리액트 설치 빌드 환경 구성 - webpack, babel

npm install -g create-react-app
npm install --save-dev react react-dom @babel/preset-react -
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core babel-loader @babel/preset-env

##### html plugin
npm install --save-dev html-webpack-plugin html-loader

##### css plugin
npm install --save-dev mini-css-extract-plugin css-loader

webpack.config.js 설정

## Develoment - 2019-09-18
### Front Back Data Send and receive

#### 데이터 송수신 모듈 설치
npm install --save axios

#### 비동기 Runtime 환경 모듈 설치 async runtime
npm install --save-dev babel-polyfill

#### package.json scripts config
"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode development --open --host 127.0.0.1 --port 3000",
    "server": "npm run build && node ./Server/Server.js"
  }

### Express Front Server

#### Express Install
npm install --save express

express로 구성한 프론트 서버 구축
react 라우터 url 주소에 맞춰서 테스트

추후 매핑 정보를 따로 관리해야함 config create

#### React Router Install
npm install --save react-router-dom

React 라우터를 이용한 싱글페이지 구성

하위 컴포넌트 App은 상위에서 받아오는 라우터 컴포넌트들을 처리함
라우터 컴포넌트는 라우터 정보가있다면 라우터 컴포넌트안에서 처리

가상 DOM을 이용한 화면 그리기 싱글페이지(SPA) 형식

### Code Splittng
#### Bundle Build File Size dividing
npm install --save @loadable/component

코드 스플리팅을 이용한 bundle.js 파일을 나눔
브라우저에서 크기가 큰 js 파일을 불러오는 문제때문에 파일을 나눔

## Develoment - 2019-09-19
### Socket Testing
Front Server에서 Back Server Spring WebSocket 소켓 서버 연결 테스트

## Develoment - 2019-09-20
### New Rule
함수형 컴포넌트 기반으로 구성

### Arrow Function this bind Test
람다식 함수 this 키워드 bind 테스트

## Develoment - 2019-09-22
### Proxy
npm install --save http-proxy
프록시 서버 설정 및 아파치 연동 테스트

### window.sessionStore test
세션 스토리지 테스트

### Socket send receive
소켓 보내기 받기 구현