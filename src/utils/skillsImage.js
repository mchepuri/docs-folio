
import surgical from '../assets/svg/skills/surgical.svg'
import clinical from '../assets/svg/skills/clinical.svg'
import laproscopy from '../assets/svg/skills/laproscopy.svg'

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
