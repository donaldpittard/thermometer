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

export const units = {
    fahrenheit: 'f',
    celsius: 'c'
};

export const isBetween = (min, max, num) => min < num && num < max;

export const toFahrenheit = celsiusTemp => parseInt((celsiusTemp * 9/5) + 32);

export const matched = x => ({
    on: () => matched(x),
    otherwise: () => x
});

export const match = x => ({
    on: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
    otherwise: fn => fn(x)
});
