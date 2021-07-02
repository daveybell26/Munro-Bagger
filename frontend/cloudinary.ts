import axios from 'axios';

const cloudinaryUpload = async (image: string) => {
  const formData = new FormData();

  formData.append('file', `data:image/jpg;base64,${image}`);
  formData.append('upload_preset', 'munro_preset');

  const { data } = await axios.post('https://api.cloudinary.com/v1_1/munro-bagger/image/upload', formData);

  return data.secure_url;
};

export default cloudinaryUpload;
