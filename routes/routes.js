const express = require ('express');
const router = express.Router();

const ejs = require ('ejs');


const handlers01 = require('../handlers/handlers01.js');

router.get('/', handlers01.main);
router.get('/snake', handlers01.snake);
router.get('/mongotest', handlers01.mongotest);
router.get('/fileuploader', handlers01.fileuploader);
router.get('/fileuploader/getuploadedfiles', handlers01.fileuploaderGetUploadedFiles);
router.post('/fileuploader/uploadfiles', handlers01.fileuploaderPostFiles);
router.get('/fileuploader/download/', handlers01.fileuploaderDownload);




// router.get('/', (req, res) => {
//   let pagedata = {};
//   ejs.renderFile('./views/01-main.ejs', (err, str) => {
//     pagedata.content = str;
//     res.render('00-frame.ejs', pagedata);
//   });
// });

// router.get('/snake', (req, res) => {
//   renderPage(req, res, '02-snake.ejs');
// });

// // router.get('/01a/', controller01.ctrl01a);
// // router.post('/01b/sendmessage', controller01.ctrl01b);

// router.get('/c1', (req, res) => {
//   let pagedatac1 = {};
//   // pagedatac1.data = "kukuriku";
//   pagedatac1.dataxy = null;
//   renderPage(req, res, '01-main.ejs', pagedatac1);
// });



// function renderPage(req, res, ejsName, datae) {
//   let pagedata = {};
//   console.log(datae);
//   let path = './views/' + ejsName;
//   ejs.renderFile(path, datae, (err, str) => {
//     pagedata.content = removeHtmlTag(str);
//     res.render('00-frame.ejs', pagedata);
//   });
// };

// function removeHtmlTag(html){
//   let htmlTagPos = html.indexOf("<html>");
//   let perHtmlTagPos = html.indexOf("</html>");
//   if (htmlTagPos >= 0 && perHtmlTagPos >= 0){
//     return html.slice(htmlTagPos + 7, perHtmlTagPos - 1);
//   } else {
//     return html;
//   }
// };

module.exports = router;