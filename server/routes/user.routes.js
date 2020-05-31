import express from 'express';
import userCtrl from '../controllers/user.controller';


const router = express.Router()

router.get('/api/users', userCtrl.list)
router.post('/api.users', userCtrl.create);


router.get('/api/users/:userId',
userCtrl.read)
router.put(userCtrl.update)
router.delete(userCtrl.remove)



router.param('userId', userCtrl.userById)


export default router;