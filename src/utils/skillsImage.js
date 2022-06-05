
const surgical = 'https://d32ta82nemg913.cloudfront.net/imgs/assets/svg/skills/surgical.svg'
const clinical = 'https://d32ta82nemg913.cloudfront.net/imgs/assets/svg/skills/clinical.svg'
const laproscopy = 'https://d32ta82nemg913.cloudfront.net/imgs/assets/svg/skills/laproscopy.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'c sections':
            return surgical;
        case 'womens health':
            return clinical;    
        case 'laproscopic surgery':
            return laproscopy;
        default:
            break;
    }
}
