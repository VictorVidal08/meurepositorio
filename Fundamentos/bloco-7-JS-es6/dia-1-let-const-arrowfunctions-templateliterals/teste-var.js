function userInfo() {
    let userEmail = 'maria@email.com';
  
    // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    console.log(userEmail);
  }
  userInfo();
  
  // Só dá pra imprimir console.log se estiver dentro da function, pois a var foi declarada dentro dela.