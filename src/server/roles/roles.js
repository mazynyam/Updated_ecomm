import AccessControl from 'accesscontrol'
const ac = new AccessControl()

const roles = (function(){
    ac.grant('basic')
    .readOwn('profile', ['_id', 'email', 'phone', '!password', '!role'])
    .updateOwn('profile', ['phone', 'password', '!role'])
    .readAny('business')
    .readAny('product')

    ac.grant('manufacturer')
    .readOwn('profile')
    .updateOwn('profile')
    .readAny('profile')
    .readAny('product')
    .createAny('product')
    .deleteAny('product')


    ac.grant('supervisor')
    .extend('basic')
    .extend('manufacturer')
    .readOwn('profile', ['email', 'phone', 'role'])
    .readAny('business')
    .readAny('product')
    .createAny('product')
    .deleteAny('product')

    ac.grant('admin')
    .extend('basic')
    .extend('supervisor')
    .extend('manufacturer')
    .updateAny('profile')
    .deleteAny('profile', 'business')
    .createAny('profile')
    .grant('basic')
    .grant('supervisor')
    .grant('manufacturer')
    .readOwn('profle')
    .readAny('profile')
    .readAny('product')
    .createAny('product')
    .deleteAny('product')
    .readAny('business')
    // End Admin Roles here

    // Finance roles here
    ac.grant('finance')

    //customer service
    ac.grant('customer service')
    .readAny('product')
    .readAny('order')
    
    //Business analyst 
    /**
     * @todo to implement it later as site grows
     */
    ac.grant('business analyst')
    ac.grant('inventory manager')
    .createAny('product')
    .deleteAny('product')

    ac.grant('logistics')
    ac.grant('retail')
    ac.grant('IT Technician')
    ac.grant('delivery')
    ac.grant('marketing')
    ac.grant('internship')
    ac.grant('Digital Operations')

    return ac
})()

export default roles;