import express from 'express'
import { memberController } from './member.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.const';

const route = express.Router();

route.get('/getAllSuperAdmin', auth(USER_ROLE.superAdmin), memberController.getAllSuperAdmin)
route.get('/getAllManager', auth(USER_ROLE.superAdmin), memberController.getAllManager)
route.get('/getAllSeller', auth(USER_ROLE.superAdmin), memberController.getAllSeller)

route.get('/getSuperAdmin/:id', auth(USER_ROLE.superAdmin), memberController.getASuperAdmin)
route.get('/getManager/:id', auth(USER_ROLE.superAdmin), memberController.getAManager)
route.get('/getSeller/:id', auth(USER_ROLE.superAdmin), memberController.getASeller)

route.put('/updateSuperAdmin/:id', auth(USER_ROLE.superAdmin), memberController.updateSuperAdmin)
route.put('/updateManager/:id', auth(USER_ROLE.superAdmin), memberController.updateManager)
route.put('/updateSeller/:id', auth(USER_ROLE.superAdmin), memberController.updateSeller)

route.delete('/deleteSuperAdmin/:id', auth(USER_ROLE.superAdmin), memberController.deleteSuperAdmin)
route.delete('/deleteManager/:id', auth(USER_ROLE.superAdmin), memberController.deleteManager)
route.delete('/deleteSeller/:id', auth(USER_ROLE.superAdmin), memberController.deleteSeller)

export const memberRoute = route;



