const sql = require('mysql2/promise')

 async function connectarBD(){
    const conexao = await sql.createConnection(
        {
            host:'localhost',
            port: 3000,
            user: 'root',
            password: '',
            database:'flix'
        }
    )

    global.conect = conexao

    return global.conect
}
