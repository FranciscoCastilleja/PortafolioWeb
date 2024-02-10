import en from './en.json';
import es from './es.json';

const lang = {
    english: 'en',
    spanish: 'es'
}

export const getI18N = ({ currentLocale = 'es' } : { currentLocale : string | undefined }) => {
    if (currentLocale === lang.english) {
        return en;
    }
    if (currentLocale === lang.spanish) {
        return es;
    }
    return es;
}