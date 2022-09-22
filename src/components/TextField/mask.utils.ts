const maskPhone = (value: string) => {
  value = value.replace(/\D/g, "")
            .substring(0, 11)
            .replace(/^(\d{2})(\d)/g, "($1)$2");
            
  if(value.replace(/\D/g, "").length === 11){
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
  }else{
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
  }

  return value;
}


const maskCPF = (value: string) => {
  return value
    .replace(/\D/g, "")
    .substring(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

const maskDate = (value: string) => {
  return value
    .replace(/\D/g, "")
    .substring(0, 8)
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
}

export { maskCPF, maskDate, maskPhone };