const formatDateRoman = (date) => {
    const months = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    const parts = date.split("-");

    const day = parts[0];
    const month = months[parseInt(parts[1], 10) - 1];
    const year = parts[2];

    return `${day} ${month} ${year}`;
}

const formatDateString = (date) => {
    const months = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    const parts = date.split("-");

    const day = parts[0];
    const month = months[parseInt(parts[1], 10) - 1];
    const year = parts[2];

    return `${day} ${month} ${year}`;
}

const formatDateNumber = (date) => {
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const parts = date.split("-");

    const day = parts[0];
    const month = months[parseInt(parts[1], 10) - 1];
    const year = parts[2];

    return `${day} ${month} ${year}`;
}

const formatDateSlash = (date) => {
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const parts = date.split("-");

    const day = parts[0];
    const month = months[parseInt(parts[1], 10) - 1];
    const year = parts[2];

    return `${day}/${month}/${year}`;
}

  export  {formatDateRoman, formatDateString, formatDateNumber, formatDateSlash};