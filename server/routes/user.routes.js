import express from 'express';
import userCtrl from '../controllers/user.controller';


const router = express.Router()

router.get('/api/users', userCtrl.list)
router.post('/api.users', userCtrl.create);


router.get('/api/users/:userId',
authCtrl.requireSignin,userCtrl.read)
router.put(authCtrl.requireSignin,authCtrl.hasAuthorization,userCtrl.update)
router.delete(authCtrl.requireSignin, authCtrl.hasAuthorization,userCtrl.remove)



router.param('userId', userCtrl.userById)


export default router;