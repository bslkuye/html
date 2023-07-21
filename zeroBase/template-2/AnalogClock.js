const AnalogClock = $container => {
  // do something!
  const makeDOMwithProperties = (domType, propertyMap) =>{
    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) =>{
      dom[key] = propertyMap[key];
    });
    return dom;
  };

  const appendChildList = (target, childList) => {
    if(!Array.isArray(childList)) return;

    childList.forEach((children) => {
      target.appendChild(children);
    })
  }

  const handHour = document.createElement('div');
  handHour.classList.add('hand', 'hour');

  const handMinute = document.createElement('div');
  handMinute.classList.add('hand', 'minute');

  const handSecond = document.createElement('div');
  handSecond.classList.add('hand', 'second')

  function timeSet() {
    const date = new Date();
    handHour.style.setProperty('--deg', date.getHours() * 30);
    handMinute.style.setProperty('--deg', date.getMinutes() * 6);
    handSecond.style.setProperty('--deg', date.getSeconds() * 6);
  }
  timeSet();
  setInterval(() => timeSet(), 1000)

  const time1 = makeDOMwithProperties('div', {className: 'time time1', innerText: '|',});
  const time2 = makeDOMwithProperties('div', {className: 'time time2', innerText: '|',});
  const time3 = makeDOMwithProperties('div', {className: 'time time3', innerText: '|',});
  const time4 = makeDOMwithProperties('div', {className: 'time time4', innerText: '|',});
  const time5 = makeDOMwithProperties('div', {className: 'time time5', innerText: '|',});
  const time6 = makeDOMwithProperties('div', {className: 'time time6', innerText: '|',});
  const time7 = makeDOMwithProperties('div', {className: 'time time7', innerText: '|',});
  const time8 = makeDOMwithProperties('div', {className: 'time time8', innerText: '|',});
  const time9 = makeDOMwithProperties('div', {className: 'time time9', innerText: '|',});
  const time10 = makeDOMwithProperties('div', {className: 'time time10', innerText: '|',});
  const time11 = makeDOMwithProperties('div', {className: 'time time11', innerText: '|',});
  const time12 = makeDOMwithProperties('div', {className: 'time time12', innerText: '|',});

  appendChildList($container, [handHour ,handMinute, handSecond, time1, time2, time3, time4, time5, time6, time7, time8, time9, time10, time11, time12]);

  
};

export default AnalogClock;
