fetch("./data.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));

//지도로 표시, 카테고리로 선택, 선택한 항목들 그래프란에 표시, 환율에 따라 계산해서 그래프 단위 통일
//추세선, 같은 원료, 선택한(전체)원료 가격변동 추이, 가격변동 정도는 %로 계산
//그래프는 마우스 오버 시 해당 칸의 정보 표시, 클릭하면 유지 (여러 그래프가 겹쳐있으므로 따로 원자재 하나 선택 후 마우스 오버)