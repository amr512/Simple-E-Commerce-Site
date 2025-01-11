let obj={
    /* 
    -------------------------------------------------------------------------------- 
    |                              user structure                                  |
    -------------------------------------------------------------------------------- 
    */
    /* user: {
        id: string, // auto-generated
        username: string,
        password: string, // should probably hash this if there's time
        name: string,
        order-ids: string[], // for easier access (redundant info, might remove)
        profile-picture: string // path/base64string, to be decided
        seller: boolean,

        banned: boolean, // may be useful????
        address: string // could change to an array 
    }*/ 
    users: [],

    stores:[],
    /* 
    -------------------------------------------------------------------------------- 
    |                              product structure                               |
    -------------------------------------------------------------------------------- 
    */
    /* product: {
        id: string,
        name: string, // readable name
        path: string, // not-so-readable short url
        description: string,
        images: string[],
    }*/
    products: [],
    /* 
    -------------------------------------------------------------------------------- 
    |                              review structure                                |
    -------------------------------------------------------------------------------- 
    */
    /* review:{
        id: string, // probably not useful
        product-id: string,
        user-id: string,
        price: number,
        rating: number // 0 < value <= 5,
        review: string // optional 
    }*/
    reviews:[],
    /* 
    -------------------------------------------------------------------------------- 
    |                              order structure                                 |
    -------------------------------------------------------------------------------- 
    */
    /* order:{
        id: string // probably not useful here
        products:{
            id:string,
            purchase-price: number // stored here in case it changes after the order
        },
        user-id: string,
        user-address: string, 
        // stored here so it doesn't change 
        // if user changes his address after ordering 
    }*/
    orders:[]
}