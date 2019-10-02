export const getPosition = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position);
        });
    });
};

export const range = (to) => {
    return [...Array(to).keys()];
};