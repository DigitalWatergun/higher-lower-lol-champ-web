
const getRandomChamp = (championData) => {
    const randomIndex = Math.floor(Math.random() * championData.length)
    return championData[randomIndex]; 
}

export { getRandomChamp };
