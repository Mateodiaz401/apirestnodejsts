import { Router } from 'express';
import { getItems } from '../controllers/order';
import { checkJwt } from '../middleware/session';

/**
 * esta ruta solo puede acceder  las personas que tienen sesiones activa!
 * que tengan un JWT valido
*/

const router = Router()

router.get("/", checkJwt, getItems)

export { router };