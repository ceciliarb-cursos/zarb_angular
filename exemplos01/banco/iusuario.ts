interface Iusuario {
    nome: string;
    email?: string;
}

function criaUsuario(usuario: Iusuario) {
    console.log(`Usuário: ${usuario.nome}("${usuario.email || '<sem email>'}") criado.`);
}

let objUsu = criaUsuario({nome: 'Cecilia', email: 'cecilia@cecilia.com'});
let objUsu2 = criaUsuario({nome: 'Seu Madruga'});
// let param: Iusuario;
// param = { nome: 'Deveria dar errado', celular: "99999999" };
// let objUsu3 = criaUsuario(param)
// let objUsu3 = criaUsuario({ nome: 'Deveria dar errado' })