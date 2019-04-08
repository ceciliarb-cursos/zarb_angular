function criaUsuario(usuario) {
    console.log("Usu\u00E1rio: " + usuario.nome + "(\"" + (usuario.email || '<sem email>') + "\") criado.");
}
var objUsu = criaUsuario({ nome: 'Cecilia', email: 'cecilia@cecilia.com' });
var objUsu2 = criaUsuario({ nome: 'Seu Madruga' });
var param = { nome: 'Deveria dar errado', celular: "99999999" };
var objUsu3 = criaUsuario(param);
