const nftTotal = 10;
// github账户地址/仓库地址/分支地址(通常为main)/图片所在路径
const githubAccounts = "qdwds";
const githubRepositories = "NFT-metadata";
const githubBranch = "master";
const imagesPath = "metadata/images";

const nftImageMax = 10;

const basePath = `https://raw.githubusercontent.com/${githubAccounts}/${githubRepositories}/${githubBranch}/${imagesPath}`;

module.exports = { nftTotal, basePath, nftImageMax };
