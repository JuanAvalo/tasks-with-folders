var db = require ('../bin/mysql');

module.exports.getFolders = async function (userId) {
    const sql_query = "SELECT idFolder, idUser, name FROM folder WHERE idUser=" + userId;
    const [rows, fields] = await db.pool.execute(sql_query);
    return rows;
}

module.exports.postFolder = async function (userId, name) {
    /*const sql_query = "INSERT INTO folder (idUser, name) "
                     +'VALUES ( '+userId+', "'+name+'", 1, "'+content+'" )';*/

    const sql_query = `INSERT INTO folder (idUser, name) VALUES (${userId}, "${name}")`;

    await db.pool.query(sql_query)
    return;
}

module.exports.updateFolder = async function (folderId, name) {
    const sql_query = `UPDATE folder SET name="${name}" WHERE idFolder=${folderId}`;

    await db.pool.query(sql_query)
    return;
}

module.exports.deleteFolder = async function (folderId) {
    const sql_query = `DELETE FROM folder WHERE idFolder = ${folderId}`;

    await db.pool.query(sql_query)
    return;
}