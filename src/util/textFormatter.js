
const formatMatchesPlayed = (matchesPlayed) => {
    return parseInt(matchesPlayed).toLocaleString();
}

const formatChampNames = (championName) => {
    if (championName === "Chogath") {
        return "Cho'Gath"
    } else if (championName === "Belveth") {
        return "Bel'Veth"
    } else if (championName === "Kaisa") {
        return "Kai'Sa"
    } else if (championName === "Khazix") {
        return "Kha'Zix"
    } else if (championName === "KogMa") {
        return "Kog'Ma"
    } else if (championName === "RekSai") {
        return "Rek'Sai"
    } else if (championName === "Velkoz") {
        return "Vel'Koz"
    } else if (championName === "KSante") {
        return "K'Sante"
    }
    
    // Add space between upper case characters
    championName = championName.replace(/([A-Z])/g, ' $1').trim()

    return championName
}

export {
    formatMatchesPlayed,
    formatChampNames
}