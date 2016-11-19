import axios from 'axios';

const s3Uploader = (picSrc) => axios.get('http://127.0.0.1:3000/s3-uploader', { params: { picSrc } });

export default s3Uploader;
