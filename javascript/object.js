let codeit = {
    naem: '코드잇',
    bornYear: 2017,
    isVeryNice: true,
    worstCourse: undefined,
    bestCourse:{
      title:'자바스크립트 프로그래밍 기초',
      language: 'JavaScript'
    }
  };
  
  console.log(codeit.name !== undefined);
  
  console.log('name' in codeit);