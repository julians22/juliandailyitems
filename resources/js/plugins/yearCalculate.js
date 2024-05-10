export default  {
    install: (app) => {
        app.config.globalProperties.$calculateYear = (year, month) => {
            return calculateYears(year, month);
        }
    }
}

function calculateYears(startYear, startMonth) {
    const startDate = new Date(startYear, startMonth - 1); // JavaScript months are 0-indexed
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Approximating years considering leap years
    const yearsElapsed = timeDifference / millisecondsInYear;
    return Math.floor(yearsElapsed);
}
