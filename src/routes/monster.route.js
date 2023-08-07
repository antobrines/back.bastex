const express = require('express');
const router = express.Router();
const monsterController = require('../controllers/monster.controller');
const monsterService = require('../services/monster.service');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
async function downloadImageFromUrl(url, folderPath) {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        headers: { 'Accept': 'image/*' },
      });
  
      if (!response.headers['content-type'].startsWith('image/')) {
        throw new Error('The URL does not point to an image.');
      }
  
      const contentDisposition = response.headers['content-disposition'];
      let imageName = 'downloaded_image.jpg'; // Default name if not found in Content-Disposition
  
      if (contentDisposition) {
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(contentDisposition);
        if (matches != null && matches[1]) {
          imageName = matches[1].replace(/['"]/g, '');
        }
      }
  
      const imageBuffer = Buffer.from(response.data, 'binary');
      const filePath = path.join(folderPath, imageName);
  
      fs.writeFileSync(filePath, imageBuffer);
      return imageName;
      console.log(`Image downloaded and saved to ${filePath}`);
    } catch (error) {
      console.error('Error downloading the image:', error.message);
    }
  }
router.get('/', monsterController.findAll);
router.get('/:id', monsterController.findById);
router.post('/', monsterController.create);
router.put('/:id', monsterController.update);
router.delete('/:id', monsterController.remove);

module.exports = router;
