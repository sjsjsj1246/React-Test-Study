# 1. Test를 해야 하는 이유

- 디버깅 시간 단축, 자동화 된 유닉 테스팅으로 특정 버그 쉽게 찾아냄
- 안정적이 어플리케이션
- 리펙토링 시간 단축, 신규 기능 개발 용이

# 2. Tesing 기본

## React Tesing Library

https://testing-library.com/docs/react-testing-library/intro/

React Testing Library는 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축된다.

DOM Testing Library란 Dom 노드(Node)를 테스트하기 위한 매우 가벼운 솔루션

Enzyme: 구현 주도 테스트, state와 props의 흐름에 중점

React Tesing Library: 행위 주도 테스트, 실제 컴포넌트가 하는 행위에 주목

## 웹 페이지 빌드 과정(Critical Rendering Path, CRP)

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

## Jest란?

- FaceBook에 의해서 만들어진 테스팅 프레임 워크.
- 최소한의 설정으로 동작하며 Test Case 를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인해준다.
- 단위 (Unit) 테스트를 위해서 이용함

### 시작

1. Jest 라이브러리 설치 npm install jest --save-dev
2. Test 스크립트 변경 "test" : "jest" or "jest --watchAll
3. 테스트 작성할 폴더 및 파일 기본 구조 생성

![image](https://user-images.githubusercontent.com/24623403/143248113-1eee31ec-aa1f-4c51-92c8-22c207ab6af6.png)

![image](https://user-images.githubusercontent.com/24623403/143248185-18ffa34f-2bad-46e8-9c35-70452a01d970.png)

## Jest 파일 구조 & 사용법

![image-20211124223538774](/Users/inseo/Library/Application Support/typora-user-images/image-20211124223538774.png)

- describe(name, fn): 여러 관련 테스트를 그룹화하는 블록을 만든다.
- it 또는 test (name, fn, timeout): 개별 테스트를 수행하는 곳, 각 테스트를 작은 문장처럼 설명한다.
- ex) Describe(과일), it(사과), it(바나나)

![image](https://user-images.githubusercontent.com/24623403/143249697-84d2487a-6567-4c23-b451-763f30d1a1ce.png)

- expect(): 값을 테스트 할 때마다 사용됨, 혼자서는 사용되지 않으며 matcher와 함께 사용됨
- matcher: 다른 방법으로 값을 테스트하도록 사용됨

![image](https://user-images.githubusercontent.com/24623403/143249950-b997464c-c5bc-4b3c-8f03-1be298bc3329.png)

## React Testing Library

- yarn(npm) test로 테스트 시작

- create-react-app을 하면 기본적으로 생성되는 테스트

```javascript
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

- APP에서 getByText라는 쿼리 함수로 learn react라는 문자열을 가져온다.
  - https://testing-library.com/docs/queries/bytext/
- expect를 통해 해당 문자열이 App에 있으면 통과함.

### 쿼리 함수란?

- 페이지에서 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법
- get, find, query등의 유형이 있다.

### get, find, query의 차점

- getby
  - 쿼리에 대해 일치하는 노드를 반환하고 일치하는 요소가 없거나 둘 이상의 일치가 발견되면 설명 오류를 발생시킵니다.(둘 이상의 요소가 예상되는 경우 getAllBy 사용)
- queryBy
  - 쿼리에 대해 일치하는 노드를 반환하고 일치하는요소가 없으면 null을 반환합니다. 이것은 존재하지 않는 요소를 어설션하는데 유용합니다. 둘 이상의 일치 항목이 발견되면 오류가 발생합니다.(확인된 경우 대신 queryAllBy 사용)
- findBy

  - 주어진 쿼리와 일치하는 요소가 발견되면 Promise를 반환합니다. 요소가 발견되지 않거나 기본 제한 시간인 1000ms후에 둘 이상의 요소가 발견되면 약속이 거부됩니다. 둘 이상의 요소를 찾아야 하는 경우 find all를 사용

  ![image](https://user-images.githubusercontent.com/24623403/143253014-f9545b8a-eff2-4b15-abbf-b4db088d08b1.png)
