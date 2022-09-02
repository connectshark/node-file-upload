const express = require('express')
const router = express.Router()
const path = require('path')
const fileUpload = require('express-fileupload')
const filePayloadExists = require('../middleware/filesPayloadExists')
const fileSizeLimiter = require('../middleware/fileSizeLimiter')
const fileExtLimiter = require('../middleware/fileExtLimiter')

router
  .post('/',
    fileUpload({ createParentPath: true }),
    filePayloadExists,
    fileExtLimiter(['.png', '.jpg', '.jpeg']),
    fileSizeLimiter,
    (req, res) => {
      const files = req.files
      Object.keys(files).forEach(key => {
        const filepath = path.join(__dirname, '../files', files[key].name)
        files[key].mv(filepath, err => {
          if (err) return res.status(500).json({
            status: 'error',
            message: err
          })
        })
      })

      res.json({
        status: 'success',
        message: Object.keys(files).toString()
      })
    }
  )

module.exports = router