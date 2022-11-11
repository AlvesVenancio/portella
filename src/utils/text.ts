function strSlugify (str: string) {
  str = str.replace(/^\s+|\s+$/g, ''); 
  str = str.toLowerCase();


  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove caracters invalidos
      .replace(/\s+/g, '-') // troca espacos em branco por traço
      .replace(/-+/g, '-'); // remove traços duplicados

  return str;
}

export {
  strSlugify
}