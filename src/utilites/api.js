import axios from 'axios';

const apiHandler = {
  key: 'key=33025300-4f56a11ea42b0ad7a58370454',

  async findPictures(request = '', page = 1) {
    axios.defaults.baseURL = "https://pixabay.com/api";
    const response = await axios.get(
      `?q=${request}&page=${page}&${this.key}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response;
  },
};

export { apiHandler };
