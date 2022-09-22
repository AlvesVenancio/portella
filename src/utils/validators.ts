const isValidEmail = (email: string) => {
    let res = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(email);
};

const isValidCPF = (cpf: string) => {
    if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (cpf.length !== 11 || !Array.from(cpf).filter(e => e !== cpf[0]).length) {
        return false
    }
    let sum = 0;
    let rest;
    for (let i = 1; i <= 9; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
    rest = (sum * 10) % 11
    if ((rest == 10) || (rest == 11)) rest = 0
    if (rest != parseInt(cpf.substring(9, 10))) return false
    sum = 0
    for (var i = 1; i <= 10; i++)
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
    rest = (sum * 10) % 11
    if ((rest == 10) || (rest == 11)) rest = 0
    if (rest != parseInt(cpf.substring(10, 11))) return false
    return true
}

const isValidPhone = (phone: string) => {

    phone = phone.replace(/\D/g, '');

    if (/^(.)\1+$/.test(phone) || String(phone).length < 10) {
        return false;
    }

    return true;
};

const isValidDate = (date: string) => {
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(date);
    if (match) {
        const day = parseInt(match[1]);
        const month = parseInt(match[2]);
        const year = parseInt(match[3]);

        const d = new Date(year, month - 1, day);

        const isValid = d.getFullYear() == year
                        && d.getMonth() + 1 == month
                        && d.getDate() == day;

        return isValid;
    } else {
        return false;
    }
}

export {
    isValidCPF,
    isValidEmail,
    isValidPhone,
    isValidDate
};