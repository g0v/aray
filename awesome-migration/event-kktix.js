const events = require('./kktix-events.json');
const { parse } = require('node-html-parser');

/**
 * @param {string} url
 * @return {*}
 */
async function kktixpage(url) {
  console.log('url', url);
  try {
    const pageResponse = await fetch(url);
    if (pageResponse.ok) {
      const page = await pageResponse.text();
      const doc = parse(page);
      const attendance = doc.querySelector('.info-count');
      console.log('attendance', trimSpace(attendance.innerText));
      return  parseAttentence(trimSpace( attendance.innerText));
    } else {
      return { current: 0, limit: 0 };
    }
  } catch (error) {
    return { current: 0, limit: 0 } ;
  }
}


/**
 * parse attentence
 * @param {string} attentence
 * @return {string} attentence string: 10 / 100 to { current: 10, limit: 100 }
 */
function parseAttentence(attentence) {
  const [current, limit] = attentence.split(' / ');
  return { current: parseInt(current), limit: parseInt(limit) };
}

/**
 * @param {string} str '\n                  \n                  台北 NPO 聚落 / 台北市中正區重慶南路三段2號\n  to 台北 NPO 聚落 / 台北市中正區重慶南路三段2號
 * @return {string} location
 */
function trimSpace(str) {
  return str.replace(/\n\s+/g, '');
}

// parseKKtix();
exports.kktixpage = kktixpage;