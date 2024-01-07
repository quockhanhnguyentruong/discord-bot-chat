javascript: 
const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let authorization;
// let chatID;

const chatID = prompt("chatID: ") || "";

// Function to make API call
async function makeAPICall() {
  const contentList = [
    'lên nào anh em ơ',
    'anh em siêng cày thế',
    'gắng lên nào',
    'quẩy lên nào anh em ơi',
    'nghỉ ngơi ăn uống thôi nào anh em',
    'anh em lên level 7 hết chưa nào',
    'cô gắng thôi nao anh em',
    'cày lên lv mà trầy trật quá , vất vả quá',
    'anh em đâu hết cả rồi nhỉ , chiến đấu mạnh tay lên',
    'chiến mạnh lên nào anh em ơi',
    'cày lên lv, em sắp lên 1 rồi, haha',
    'nhiều anh em vẫn chăm chỉ cày',
    'chúc mừng sếp, em cũng sắp lên',
    'ăn xong rồi giờ ngồi chat với anh em',
    'ngủ gì nữa, chat mạnh đi chứ',
    'thôi nghỉ ăn cơm đây các bác à',
    'Lm việc nhà bác ko full time đc Rảnh lên lm vài tin'
  ];
console.log('xxx')
  try {
    const response = await axios.post(``, {
      content: contentList[getRandomSleepTime(0, 16)]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authorization
      }
    });
    console.log('API Response send message successful: ', response.data.id);
  } catch (error) {
    console.error('Error:', error);
  }
}

function getRandomSleepTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


rl.question('Enter Authorization: ', (auth) => {
  authorization = auth;
  rl.question('Enter chatID: ', (id) => {
    chatID = id;

    rl.close();

    (async () => {
      while (true) {
        await makeAPICall();
        const sleepTime = getRandomSleepTime(40000, 100000);
        await sleep(sleepTime);
      }
    })();
  });
});

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}