const express = require( 'express');
const userCtrl = require( '../controllers/user.controller');
const authCtrl = require("../controllers/auth.controller");



const router = express.Router()

// router.route('/api/users')
//   .get(userCtrl.list)
//   .post(userCtrl.create)

router.get('/api/users',userCtrl.list)
router.post('/api/users',userCtrl.create)

// router.route('/api/users/:userId')
//   .get(authCtrl.requireSignin, userCtrl.read)
//   .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
//   .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.get('/api/users/:userId',authCtrl.requireSignin, userCtrl.read)

router.put('/api/users/:userId', authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)

router.delete('/api/users/:userId',authCtrl.hasAuthorization, userCtrl.remove)




router.param('userId', userCtrl.userByID)


module.exports =  router;