var task = require('../models/taskModel');

module.exports = {
    getTasks: async function (req, res, next) {
        var folderId = req.query.folderId;
        if(isNaN(folderId)) res.status(400).json({"Error:":req.query})
        else {
            var data = await task.getTasks(folderId)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(200).json(data)
            }
    },

    postTask: async function ( req, res, next) {
        var folderId = req.body.folderId;
        var content = req.body.content;
        if(isNaN(folderId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await task.postTask(folderId, content)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(200).json({'status':'ok'})
            }
            catch (e) {
                res.status(500).json({
                    status:false,
                    error: e.message
                })
            }
        }

    },

    updateTaskContent: async function ( req, res, next) {
        var taskId = req.body.taskId;
        var content = req.body.content;
        if(isNaN(taskId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await task.updateTaskContent(taskId, content)
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Headers','X-Requested-With, Content-Type')
            res.status(200).json({'status':'ok'})
            }
            catch (e) {
                res.status(500).json({
                    status:false,
                    error: e.message
                })
            }
        }

    },

    updateTaskState: async function ( req, res, next) {
        var taskId = req.body.taskId;
        var state = req.body.state;
        if(isNaN(taskId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await task.updateTaskState(taskId, state)
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Headers','X-Requested-With, Content-Type')
            res.status(200).json({'status':'ok'})
            }
            catch (e) {
                res.status(500).json({
                    status:false,
                    error: e.message
                })
            }
        }

    },

    deleteTask: async function ( req, res, next) {
        var taskId = req.query.taskId;
        if(isNaN(taskId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await task.deleteTask(taskId)
            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Headers','X-Requested-With, Content-Type')
            res.status(200).json({'status':'ok'})
            }
            catch (e) {
                res.status(500).json({
                    status:false,
                    error: e.message
                })
            }
        }

    },
}