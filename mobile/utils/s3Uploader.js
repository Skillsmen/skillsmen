import axios from 'axios';
import settings from '../settings';

const s3Uploader = picSrc => axios.get(`${settings.SERVER}/s3-uploader`, { params: { picSrc } });

export default s3Uploader;
