
const surgical = 'https://babycatcher-static.s3.ap-south-1.amazonaws.com/imgs/assets/svg/skills/surgical.svg'
const clinical = 'https://babycatcher-static.s3.ap-south-1.amazonaws.com/imgs/assets/svg/skills/clinical.svg'
const laproscopy = 'https://babycatcher-static.s3.ap-south-1.amazonaws.com/imgs/assets/svg/skills/laproscopy.svg'

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
