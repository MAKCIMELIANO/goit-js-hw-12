import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const apiKey = '44261766-43e443b40d02cd3bf18e38bdd';

export async function fetchImages(searchQuery, page = 1) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`
    );
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Error while receiving images!',
      position: 'topRight',
      timeout: 3000,
    });
    console.error(error);

    document.querySelector('input').value = '';
    const spinner = document.querySelector('.loader');
    if (spinner) {
      spinner.remove();
    }
  }
}
