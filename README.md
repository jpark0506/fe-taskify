# Taskify

## 

## 작업 계획

### 0.  프로젝트 설정
- [x] index.html, js/index.js, css/main.css, assets(icon 보관용 디렉토리) 생성
- [x] Typography System 설정 
- [x] Color System 설정 (Default Value -> Color System)
- [x] Number System 설정 (CSS에서 어떤 역할을 하는지 이해하지 못했음)
- [x] Object Style 설정 -> 1번 레이아웃 작업하면서 생성하기
- [x] Icon Asset 폴더에 보관하기
- [x] 기본 데이터 객체 생성(카드, 칼럼, 히스토리 데이터)
- [x] 기본 데이터 객체 CRUD 로직 생성

### 1. 전체 레이아웃 작업 (마크업 작업하기)
- [x] 전체 영역(헤더, 칼럼등 나누기)
	- [x] 헤더
	- [x] 칼럼
- [ ] 동적 영역
	- [ ] 히스토리
	- [x] 카드(JS 동적 생성)
	- [ ] 모달(JS 동적 생성)
- [x] CSS 붙이기
	- [x] 칼럼
	- [x] 카드
	- [ ] 모달
	- 
### 2. 카드 로직 구현
- [x] 카드 생성 구현
	- [x] EventListener 붙이기
		- [x] 취소
		- [x] 등록
	- [x] 칼럼 icon 클릭에 EventListener 연결
		- [x] 카드 동적 생성
	- [ ] 카드 EventListener에 Validation 넣기
		- [x] 빈칸 (레이아웃에서 disable 걸어 차단)
		- [ ] 500자 제한
- [x] 카드 삭제 구현
	- [x] 카드 삭제 icon에 EventListener 붙이기
		- [ ] 모달 띄우기
	- [ ] 모달에 EventListener 붙이기
		- [ ] 취소
		- [ ] 삭제
- [x] 카드 수정 구현
	- [x] 카드 수정 icon에 EventListener 붙이기
		- [x] 레이아웃 변경
	- [x] 변경되었을 때, 작동하는 버튼들의 EventListener 연결
		- [x] 취소
		- [x] 저장(생성은 등록, 차이가 있음)
### 3. 카드 이동 구현
### 4. 칼럼 생성, 수정, 삭제 구현
### 5. 활동 로그 레이아웃 구현
### 6. 활동 로그 생성, 삭제 구현
### 7. Redo, Undo 구현
### 8. 카드 정렬하기 구현

## 1주차 목표
- [x] 0.  프로젝트 설정(1/7)
- [ ] 1. 전체 레이아웃 작업 (마크업 작업하기)(1/8)
- [x] 2. 카드 로직 구현(1/9)
- [ ] 3. 칼럼 생성, 수정, 삭제 구현(1/10)
- [ ] 4. 카드 이동 구현(1/10)
## 2주차 목표
- [ ] 5.  활동 로그 레이아웃 구현
- [ ] 6. 활동 로그 생성, 삭제 구현
- [ ] 7. Redo, Undo 구현
- [ ] 8. 카드 정렬하기 구현