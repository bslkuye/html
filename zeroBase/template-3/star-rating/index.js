// do something!
const StarRating = $container => {
  let star = null;

  let container = document.createElement('div')
  container.className = 'star-rating-container';
  $container.appendChild(container);

  //star개수만큼 생성
  for(let i = 0; i < $container.getAttribute('data-max-rating'); i++){
    star = document.createElement('i');
    star.id = (i + 1);
    star.className = 'bx bxs-star';
    container.appendChild(star);
  }

  function ratingChangeEvent(i){
    const ratingChange = new CustomEvent('rating-change', {
      detail: i
    });
    $container.dispatchEvent(ratingChange);
  }

  for(let i = 0; i < $container.getAttribute('data-max-rating'); i++){
    let simg = container.childNodes[i];
    
    simg.addEventListener('mouseover', () => {
      for(let j = 0; j < simg.id.replace('star',''); j++){
        let targetStar = container.childNodes[j];
        targetStar.classList.add('hovered');
      }
    });

    simg.addEventListener('mouseout', () => {
      for(let j = 0; j < simg.id.replace('star',''); j++){
        let targetStar = container.childNodes[j];
        targetStar.classList.remove('hovered');
      }
    });
    
    simg.addEventListener('click', () => {
      ratingChangeEvent(i + 1);
      for(let j = 0; j < $container.getAttribute('data-max-rating'); j++){
        let targetStar = container.childNodes[j];
        targetStar.classList.remove('selected');
      }
      for(let j = 0; j < simg.id.replace('star',''); j++){
        let targetStar = container.childNodes[j];
        targetStar.classList.add('selected');
      }
    })
  }

}

export default StarRating;