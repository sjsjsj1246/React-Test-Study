# React Testing Study

## index

1. Test를 해야 하는 이유
2. Testing 기본
3. Testing 설정 및 준비
4. 간단한 앱
5. 복잡한 앱



## 1. Test를 해야 하는 이유

- 디버깅 시간 단축, 자동화 된 유닉 테스팅으로 특정 버그 쉽게 찾아냄
- 안정적이 어플리케이션
- 리펙토링 시간 단축, 신규 기능 개발 용이



## 2. Tesing 기본



### React Tesing Library

React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축된다.

DOM Testing Library란 Dom 노드(Node)를 테스트하기 위한 매우 가벼운 솔루션



Enzyme: 구현 주도 테스트, state와 props의 흐름에 중점

React Tesing Library: 행위 주도 테스트, 실제 컴포넌트가 하는 행위에 주목



### 웹 페이지 빌드 과정(Critical Rendering Path, CRP)

![](https://user-images.githubusercontent.com/24623403/143088336-88d45207-05d9-43ab-a811-91997a51ac28.png)

1. 문서를 읽어들여서 그것들을 파싱하고 어떤 내용을 페이지에 렌더링할 지 결정한다.
2. 브라우저가 DOM과 CSSOM을 결합하는 곳으로 화면에 보이는 모든 콘텐츠의 정보와 스타일 정보를 모두 포함하는 최종 렌더링 트리를 출력한다.
3. 브라우저가 페이지에 표시되는 각 요소의 크기와 위치를 계산한다.
4. 페인트 단계에서 브라우저는 레이아웃 결과를 선택하고 픽셀을 화면에 페인트 한다.





![](https://user-images.githubusercontent.com/24623403/143088725-ebec13c1-ebed-4fb6-a1ce-9bf006191eaf.png)

HTML 요소들의 구조화된 표현

- DOM은 HTML이 브라우저의 렌더링 엔진에 의해 분석되고 분석이 모두 끝나고난 HTMl 파일이 DOM이다.
- HTML은 화면에 보이고자 하는 모양과 구조를 문서로 만들어서 단순 텍스트로 구성되어있으며 DOM은 HTML문서의 내용과 구조가 객체 모델로 변화되어 다양한 프로그램에서 사용될 수 있다.
- HTML 문서가 유효하지 않게 작성됐을때는 브라우저가 올바르게 교정해주며, DOM은 자바스크립트에 의해 수정될 수 있다. 하지만 HTML은 수정하지 않는다.
