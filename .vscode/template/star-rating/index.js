// do something!
const StarRating = $container => {
  let star = null;
  for(let i = 0; i < $container.getAttribute('data-max-rating'); i++){
    star = document.createElement('i');
    star.src = './star.svg';
    star.id = 'star' + (i + 1);
    // star.className = 'none';
    $container.appendChild(star);
  }
  const simg = document.querySelectorAll('img');
  console.log(simg)
  // simg[i].addEventListener('onclick', () => {
  //   console.log(i);
  // })


}

export default StarRating;