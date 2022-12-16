//브라우저에 저장되는 키-값 쌍
/*
로컬 스토리지 : 브라우저 종료 시에도 유지되는 데이터
세션 스토리지 : 새로 고침 시에도 유지되는 데이터 (같은 탭 내에서만)

쿠키와 다른 점
-요청 헤더에 포함되지 않음
-클라이언트에서만 조정 가능
-해당 url에서만 접근 가능
*/

//웹 스토리지 쓰기

//로컬 스토리지
localStorage.setItem('key', value);
localStorage.key = value;

//세션 스토리지
sessionStorage.setItem('key', value);
sessionStorage.key=value;

//웹 스토리지 접근

//로컬 스토리지
localStorage.getItem('key');
localStorage.key;

//세션 스토리지
sessionStorage.getItem('key');
sessionStorage[key]

//웹 스토리지 삭제

localStorage.removeItem('key');
localStorage.clear();

sessionStorage.removeItem('key');
sessionStorage.clear();
