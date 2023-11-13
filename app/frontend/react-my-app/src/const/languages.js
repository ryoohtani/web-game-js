export const LANGUAGES = [
    'js',
    'C#',
    'Python',
    'Go',
    'Java',
    'HTML'
];

// 1秒後にデータをresolveする
export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000)
    })
}