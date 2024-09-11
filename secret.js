// 使用 dotenv 加载 .env 文件中的变量
require('dotenv').config();

async function getSecret() {
    // 直接从 .env 文件中获取 AWS 密钥
    return {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    };
}

module.exports = { getSecret };
