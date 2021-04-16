var folder = require('../models/folderModel');

module.exports = {
    getFolders: async function (req, res, next) {
        var userId = req.params.userId;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            var data = await folder.getFolders(userId)
            res.set('Access-Control-Allow-Origin', '*')
            res.status(200).json(data)
            }
    },

    postFolder: async function ( req, res, next) {
        var userId = req.params.userId;
        var name = req.body.name;
        if(isNaN(userId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await folder.postFolder(userId, name)
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

    updateFolder: async function ( req, res, next) {
        var folderId = req.body.folderId;
        var name = req.body.name;
        if(isNaN(folderId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await folder.updateFolder(folderId, name)
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

    deleteFolder: async function ( req, res, next) {
        var folderId = req.query.folderId;
        if(isNaN(folderId)) res.status(400).json({"Error:":"Invalid ID"})
        else {
            try{
            await folder.deleteFolder(folderId)
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