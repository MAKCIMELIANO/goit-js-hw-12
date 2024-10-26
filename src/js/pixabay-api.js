import iziToast from 'izitoast';

const apiKey = '44261766-43e443b40d02cd3bf18e38bdd';

export function fetchImages(searchQuery) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Error while receiving images!',
        position: 'topRight',
        timeout: 3000,
      });
      console.error(error);
    });
}
