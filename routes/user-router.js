const { Router } = require("express");
const { usersGet,userPost,userPut, userDelete, userByIdGet } = require("../controllers/user-controller");
const router=Router();

router.get('/', usersGet);
router.get('/',userByIdGet);
router.put('/:id',userPut);
router.post('/',userPost);
router.delete('/', userDelete);

module.exports = router;