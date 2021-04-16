var db = require ('../bin/mysql');

module.exports.getTasks = async function (folderId) {
    const sql_query = "SELECT idTask, idFolder, content, state FROM task WHERE idFolder=" + folderId;
    const [rows, fields] = await db.pool.execute(sql_query);
    return rows;
}

module.exports.postTask = async function (folderId, content) {
    const sql_query = `INSERT INTO task (idFolder, content, state) VALUES (${folderId}, "${content}", 0)`;

    await db.pool.query(sql_query)
    return;
}

module.exports.updateTaskContent = async function (taskId, content) {
    const sql_query = `UPDATE task SET content="${content}" WHERE idTask=${taskId}`;

    await db.pool.query(sql_query)
    return;
}

module.exports.updateTaskState = async function (taskId, state) {
    const sql_query = `UPDATE task SET state="${state}" WHERE idTask=${taskId}`;

    await db.pool.query(sql_query)
    return;
}

module.exports.deleteTask = async function (taskId) {
    const sql_query = `DELETE FROM task WHERE idTask = ${taskId}`;

    await db.pool.query(sql_query)
    return;
}